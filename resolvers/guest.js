const jwt = require('jsonwebtoken');
const {
  hashPassword,
  createToken,
  getUserId,
  formatSearch,
  addViewsView, addViewsBooking, addMoneyToRevenue, getAvailableSchedule,
  createRevenue
} = require('../utils')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/template/booking')
const resetTemplate = require('../services/template/resetPassword')
const bcryptjs = require('bcryptjs')
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = '131089285485-c6aep24hbqq39l6ftd5mnjep5495tssc.apps.googleusercontent.com'
const moment = require('moment-timezone')
const guestResolver = {
  Query: {
    async getCurrentUser(_, args, { User, req }) {
      const userId = getUserId(req,false)
      return await User.findById(userId)
    },
    async getOffice(_, args, {Office}){
      const office = await Office.findById(args.id).populate([{
        path: 'pricing'
      },{
        path: 'location'
      },{
        path: 'officeRules'
      }, {
        path: 'host'
      },{
        path: 'reviews',
        populate: {
          path: 'user',
          select: 'firstName lastName avatar'
        }
      }])
      await addViewsView(office._id)
      return office
    },
    async searchTitle(_,{searchTerm},{Office}){
      const res = await Office.find({$text: {$search: searchTerm}}, {score: {$meta:'textScore'}}).select('_id title')
      .sort({score: {$meta: 'textScore'}})
      .limit(5)
      return res
    },
    async searchOffice(_, { searchTerm, area, category }, { Office, Location }) {
      if(!searchTerm && !area){
        let condition = {}
        if(category !=='all') condition.category = category
        return await Office.find(condition).populate([{
          path: 'pricing'
        },{
          path: 'location'
        },{
          path: 'officeRules'
        }, {
          path: 'reviews'
        }])
      }
      const condition = {}

      // searchTitle
      searchTerm = formatSearch(searchTerm)
      if(searchTerm){
        condition.searchTitle = { "$regex": searchTerm, "$options": "i" }
      }

      // area
      if(area){
        const foundLocation = await Location.find({
          lat: { $gte: area.ma.from, $lte: area.ma.to },
          lng: { $gte: area.ga.from, $lte: area.ga.to }
        })
        condition.location = { $in: foundLocation }
      }

      // category
      if(category && category!=='all') condition.category = category  
      return await Office.find(condition).populate([{
        path: 'pricing'
      },{
        path: 'location'
      },{
        path: 'officeRules'
      }, {
        path: 'reviews'
      }])
    },
    async searchOfficeByFilter(_, { id, minSize, maxSize, minNumSeats, maxNumSeats, minPrice, maxPrice, amenities }, { Office, Pricing }) {
      const condition = {}
      // id
      if(id){
        condition._id = {$in: id}
      }
      // size
      if(minSize && maxSize && minSize <= maxSize) {
        condition.size = {  $gte: minSize, $lte: maxSize }
      }
      // numSeats
      if(minNumSeats && maxNumSeats && minNumSeats <= maxNumSeats) {
        condition.numSeats = {$gte: minNumSeats,  $lte:maxNumSeats }
      }
      // price
      if(minPrice && maxPrice && minPrice <= maxPrice){
        const foundPrice = await Pricing.find({basePrice: { $range: [ minPrice, maxPrice ] }}).select('_id')
        condition.pricing = foundPrice
      }
      // amentities
      if(amenities){
        condition.amenities = { $all: amenities }
      }
      return Office.find(condition)
    },
    // top booking offices
    async topBookingOffice(_, {}, { Office, Booking, Views }) {
      let topOffices =await Views.find().sort('-numBooking').limit(10)
      let result = []
      for(el of topOffices){
        let foundOffice = await Office.findOne({_id: el.office}).populate({
          path: 'reviews',
          select: 'stars'
        }).select('id title address pictures status')
        result.push(foundOffice)
      }
      return result
    },
    // find num office contain address
    async getNumOffice(_, { }, { Office }) { // eg: sContain = Hà Nội
      const condition = {}
      let sContain = ['Hà Nội', 'Đà Nẵng', 'Hồ Chí Minh']
      let results = []
      for(s of sContain){
        condition.address = { "$regex": s, "$options": "i" }
        condition.status='active'
        const currentOffice = await Office.find(condition)
        results.push(currentOffice.length)
      }
      return results
    },
    /* guest can book in AvailablseSchedule */
    async getAvailableSchedule(_, {office, startDate, endDate},{ AvailableSchedule, BookedSchedule }){
      // get current AvailableSchedule
      let currentAvailableSchedule = await AvailableSchedule.find({
        office,
        // date: {$gte: new Date(startDate),  $lte: new Date(endDate) }
      })

      // delete slots in each day
      for(element of currentAvailableSchedule){
        // get booked slots
        let formatDate = new Date(element.date)
        formatDate.setHours(0,0,0,0)
        let nextDate = new Date(formatDate.getFullYear(), formatDate.getMonth(), formatDate.getDate()+1)
        const bookedSlots = await BookedSchedule.findOne({
          office,
          date: {"$gte": formatDate, "$lt": nextDate}
        })
        if(bookedSlots){
          // delete slots are booked
          for(element2 of bookedSlots.slots){
            if(element.slots.indexOf(element2)>=0)
              element.slots.splice(element.slots.indexOf(element2), 1)
          }
          if(element.slots.length==0) {
            currentAvailableSchedule.splice(currentAvailableSchedule.indexOf(element),1)
          }
        }
      }

      return currentAvailableSchedule
    },
    /* get all booking of a guest (logined) */
    async getBookingByGuest(_, arg,{ Booking, req }){
      const userId = getUserId(req)
      const currentBooking = await Booking.find({
        bookee: userId,
      }).populate([{
        path: 'payment',
        select: 'totalPrice'
      }, {
        path: 'office',
        select: 'id title pictures address',
        populate: {
          path: 'host',
          select: 'firstName lastName email phone'
        }
      }, {
        path: 'bookedSchedules',
        select: 'date slots'
      }]).sort('-createdAt')
      return currentBooking;
    },
    async getInvoice(_,{bookingId}, {Booking}){
      const booking = await Booking.findById(bookingId)
      .populate([{
        path: 'payment',
        select: 'totalPrice'
      }, {
        path: 'office',
        select: 'id title pictures address',
        populate: {
          path: 'host',
          select: 'firstName lastName email phone'
        }
      }, {
        path: 'bookedSchedules',
        select: 'date slots'
      }])
      if(!booking) throw new Error('Invoice not exist')
      return booking
    },
    async getMessages(_,{},{User, Conversation, req}){
      const userId = getUserId(req)
      const conversations = await Conversation.find({participants: {$in: [userId]}})
      .populate([{
        path: 'messages',
        populate: {
          path: 'from to',
          model: 'User',
          select: 'firstName lastName avatar'
        }
      }]).sort('-createdAt')
      let res = []
      let tmp = {}
      for(let i of conversations){
        i.participants.splice(i.participants.indexOf(userId),1)
        i.withPerson = await User.findById(i.participants[0]).select('id firstName lastName avatar')
        tmp ={messages: i.messages, withPerson: i.withPerson, createdAt: i.createdAt,id: i._id,read:i.read}
        res.push(tmp)
      }
      return res
    },
    async addView(_,{},{Review,req,User,Views, Office, Revenue, Booking}){
      const offices = await Office.find({host:"5c973c0bf4b1381a4a117f3a"})
      await Office.updateMany({host:"5c973c0bf4b1381a4a117f3a"},{tags:['vip','phannguyen']})
      // let term = 'Phúc Quý Office có quà tặng dành cho quý doanh nghiệp'
      // const res = await Office.find({$text: {$search: term}}, {score: {$meta:'textScore'}}).select('_id title')
      // .sort({score: {$meta: 'textScore'}})
      /*
      let email = 'xiaosasori@gmail.com'
      let office = await Office.findById('5ca088184433ea13b4adf847')
      
      const order = {
        subject: 'Your booking on Batah',
        title: office.title,redirectDomain:'http://www.batah.space/invoice/5cac0fe40ff43a171c6b8c08',
        recipients: email.split(',').map(email => ({ email: email.trim() }))
    }

    const mailer = new Mailer(order, surveyTemplate(order));
    try {
        await mailer.send();
    } catch (err) {
    }
    */
      // let users = await User.find()
      // for(user of users){
      //   await new Revenue({host: user._id}).save()
      // }
      // await Office.update({}, {status: 'pending'}, {multi:true})
      // const offices = await Office.find()
      // for(o of offices){
      //   o.
      // //   await new Views({office: o._id}).save()
      // }
    },
    async getDashboard(_,{},{req,User, Office, Views, Notification}){
      const userId = getUserId(req)
      const user = await User.findById(userId)
      const result = {totalViews: 0, totalBooking:0, totalReviews:0}
      if(user.role==='guest') throw new Error('You have no access to this page')
      else if(user.role==='host'){
        const notifies = await Notification.find({user: userId}).populate('office').sort('-createdAt')
        result.notifies = notifies
        //get all offices of user 
        // TODO: find where status is active
        const userOffices = await Office.find({host: user._id, status: 'active'}).select('_id reviews')
        result.activeOffices =  userOffices.length
        for(office of userOffices){
          // add totalView totalBooking
          let view = await Views.findOne({office: office._id}).select('numView numBooking')
          result.totalViews += view.numView
          result.totalBooking += view.numBooking
          // add totalReviews
          result.totalReviews += office.reviews.length
        }
      }
      return result
    },
    async canReview(_, {office}, { Office,Booking, Review, req}){
      let canReview = false
      const userId = getUserId(req, false)
      if(userId) {
        const isHost = await Office.findOne({host: userId, _id: office})
        if(isHost) return false; //host cant review his office
        let booking = await Booking.find({bookee: userId, office}).sort('-createdAt')
        if(!booking) return false //user has not book this office
        let lastestBooking = booking[0]
        let review = await Review.find({office, user:userId}).sort('-createdAt')
        let lastestReview = review[0]
        if(lastestBooking.createdAt > lastestReview.createdAt) canReview = true //user has new book and not review yet
        else canReview= false // user has reviewed on lastest booking
      }
      return canReview
    },
    async getBookmarks(_,{},{req, User}){
      const userId = getUserId(req,false)
      let officesBookmarked = await User.findById(userId).populate({
        path: 'bookmarks',
        model: 'Office',
        select: 'title address pictures',
        populate: {
          path: 'reviews',
          model: 'Review',
        }
      }).select('bookmarks')
      return officesBookmarked.bookmarks
    },
    async getUserReviews(_,{},{req, Review}){
      const userId = getUserId(req, false)
      const reviews = await Review.find({user: userId})
        .populate([
          {path:'office',model:'Office',select: 'title _id'}
        ])
        .select('createdAt stars pictures text')
        .sort('-createdAt')
        return reviews
    }
  },
  Mutation: {
    async reqResetPassword(_, { email }, { User }){
      return true
    },
    async resetPassword(_, {token, password}, { User}){

      if(token){
        try {
          const decoded = jwt.verify(token, process.env.SECRET);
          const userId =  decoded.userId;
          const hashedPassword = await hashPassword(password)
          await User.updateOne({_id: userId}, {password:hashedPassword})
          return true
        } catch (err) {
          throw new Error('Invalid token');
        }
      }
    },
    async setPassword(_, { password, confirmPassword }, { req, User }) {
      if(password !== confirmPassword) throw new Error('Password and Confirm password are not matched')
      const userId = getUserId(req)
      const user = await User.findById(userId)

      if (!user) {
        throw new Error('User not exist')
      }
      const hashedPassword = await hashPassword(password)
      const newUser = await User.findOneAndUpdate({_id: userId}, {password: hashedPassword, userType:"normal"}, {new: true})
      // create Revenue
      return newUser
    },
    async changePassword(_, {currentPassword, password, confirmPassword }, { req, User }){
      if(password !== confirmPassword) throw new Error('Password and Confirm password are not matched')

      const userId = getUserId(req)
      const user = await User.findById(userId)

      if (!user) {
        throw new Error('User not exist')
      }
      const isValidPassword = await bcryptjs.compare(currentPassword, user.password)
      if (!isValidPassword) throw new Error('Invalid password')
      
      const hashedPassword = await hashPassword(password)
      const newUser = await User.findOneAndUpdate({_id: userId}, {password: hashedPassword, userType:"normal"}, {new: true})
      // create Revenue
      return newUser
    },
    async signup(_, { email, password, firstName, lastName }, { User }) {
      const user = await User.findOne({ email })
      if (user) {
        throw new Error('User already exists')
      }
      const hashedPassword = await hashPassword(password)
      const newUser = await new User({
        firstName,
        lastName,
        password: hashedPassword,
        email,
        avatar: `http://gravatar.com/avatar/${email}?d=identicon`
      }).save()
      
      return {
        user: newUser,
        token: createToken(newUser, '1hr')
      }
    },
    async login(_, { email, password }, { User }) {
      const user = await User.findOne({ email })
      if (!user) throw new Error('User not found')
      const isValidPassword = await bcryptjs.compare(password, user.password)
      if (!isValidPassword) throw new Error('Invalid password')
      return { user, token: createToken(user, '1hr') }
    },
    async loginGoogle(_, { token }, { User }) {
      const client = new OAuth2Client(CLIENT_ID)
      try {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID
        })
        const payload = ticket.getPayload()
        const email = payload['email']
        const user = await User.findOne({ email })
        if (!user) {
          const firstName = payload['given_name']
          const lastName = payload['family_name']
          const avatar = payload['picture']
          const newUser = await new User({
            email,
            firstName,
            lastName,
            avatar,
            userType: 'google'
          }).save()
          return {
            user: newUser,
            token: createToken(newUser, '1hr')
          }
        }
        return {
          user,
          token: createToken(user, '1hr')
        }
      } catch (err) {
        throw new Error('Invalid token')
      }
    },
    updateIdentity(_, { identity }, { User, req }) {
      const userId = getUserId(req)
      const user = User.findOneAndUpdate(
        { _id: userId },
        { identity },
        { new: true }
      )
      return user
    },
    updateProfile(_, { email, firstName, lastName, phone, avatar, address }, { User, req }) {
      const userId = getUserId(req)
      const user = User.findOneAndUpdate(
        { _id: userId },
        { email, firstName, lastName, phone, avatar, address },
        { new: true }
      )
      return user
    },
    async createReview(_, {text,cleanliness,accuracy, location, checkIn,office, pictures}, {User, Office,Notification, Review,Booking, req}){
      const userId = getUserId(req)
      const user = await User.findById(userId)
      //TODO:need to check if user has booked this
      let booking = await Booking.find({bookee: userId, office})
      if(!booking) throw new Error('You cannot leave review to this office')
      const stars= ((cleanliness+accuracy+ location+ checkIn)/4).toFixed(2)
      const newReview =  await new Review({pictures,text,stars,cleanliness,accuracy, location, checkIn,office,user:userId}).save()
      const updatedOffice=await Office.findOneAndUpdate({_id: office},{ $push: {reviews:{$each: [newReview._id]}} })
      const result = await Review.findById(newReview._id).populate('user','firstName lastName avatar')
      //TODO: user can only review onece per order
      // create notification
      await new Notification({user:updatedOffice.host, type:'review',
          office,message:`${user.firstName} ${user.lastName} left a review ${stars} on ${updatedOffice.title}`}).save()
      return result
    },
    async createBooking(_, { bookedSchedules }, {User,Notification,BookedSchedule, Office,Booking, Payment, req }) {
      // test moment get date at 00:00:00
        //
      let scheduleByOffice  = await getAvailableSchedule(bookedSchedules.office)
      for(let day of scheduleByOffice){
        // let a = moment(day.date).endOf('day')
        // let b = moment(Number(bookedSchedules.date))
        if(moment(day.date).endOf('day').diff(moment(Number(bookedSchedules.date)),'days')<1){ //book in cur day
          for(let slot of bookedSchedules.slots){
            if(!day.slots.includes(slot)) throw new Error('Schedule not available')
          }
        }
      }
      const userId = getUserId(req, false)
      if(userId) {
        const user = await User.findById(userId)
        if(!user.identity) await User.updateOne({_id:userId}, {identity:bookedSchedules.identity})
      }
      const {firstName, lastName, email, phone, identity} = bookedSchedules
      let officeId = bookedSchedules.office
      let office = await Office.findById(officeId).populate('pricing host')
      let totalPrice = office.pricing.basePrice * bookedSchedules.slots.length
      let serviceFee = totalPrice * 0.1
      let paymentMethod = 'paypal'
      const payment = await new Payment({serviceFee, officePrice: office.pricing.basePrice,totalPrice,paymentMethod}).save()
      const newBookedSchedule = await new BookedSchedule({
        office: officeId,
        date : new Date(bookedSchedules.date),
        slots: bookedSchedules.slots
      }).save()
      const newBooking = await new Booking({
        firstName,
        lastName,
        phone,
        email,
        bookee: userId,
        office:officeId,
        bookedSchedules: newBookedSchedule._id,
        payment: payment._id,
        identity
      }).save()

      // add View Booking
      await addViewsBooking(officeId)

      // add Revenue
      await addMoneyToRevenue({host: office.host, total: totalPrice - serviceFee, withdrawable: totalPrice - serviceFee})
      await new Notification({user:office.host, type:'booking',
          office: office._id,message:
          `${firstName} ${lastName} book slots ${bookedSchedules.slots} on ${bookedSchedules.date} - ${office.title}`}).save()

      //send email
      const order = {
        subject: 'Your booking on Batah',
        title: office.title,
        redirectDomain:`http://www.batah.space/invoice/${newBooking._id}`,
        recipients: email.split(',').map(email => ({ email: email.trim() }))
      }
      const mailer = new Mailer(order, surveyTemplate(order));
      await mailer.send();

      return {id: newBooking._id, office, createdAt: newBooking.createdAt,firstName,lastName,email,phone,
        bookedSchedules:newBookedSchedule, payment: {totalPrice}, identity}
    },
    async createBookedSchedule(_, { office, date, slots }, { BookedSchedule }) {
      const newBookedSchedule = await new BookedSchedule({
        office,
        date : new Date(date),
        slots
      }).save()
      return newBookedSchedule
    },
    async createPayment(_, { serviceFee, officePrice, numHours, paymentMethod }, { Payment }) {
      const newPayment = await new Payment({
        serviceFee,
        officePrice,
        totalPrice : officePrice * numHours * ( 1 + serviceFee/100 ),
        paymentMethod,
      }).save()
      return newPayment
    },
    async createPaymentAccount(_, { type, paypal, creditcard }, { PaymentAccount }) {
      const newPaymentAccount = await new PaymentAccount({
        type,
        paypal,
        creditcard
      }).save()
      return newPaymentAccount
    },
    async createPaypalInformation(_, { email }, { PaypalInformation }) {
      const newPaypalInformation = await new PaypalInformation({
        email
      }).save()
      return newPaypalInformation
    },
    async createCreditCardInformation(_, { cardNumber, expiresOnMonth, expiresOnYear, securityCode, fullName, country }, { CreditCardInformation }) {
      const newCreditCardInformation = await new CreditCardInformation({
        cardNumber,
        expiresOnMonth,
        expiresOnYear,
        securityCode,
        fullName,
        country
      }).save()
      return newCreditCardInformation
    },
    async sendAdmin(_, { content }, {req, User, Message, Conversation}){
      const userId = getUserId(req)
      let to = await User.findOne({role: 'admin'}) //admin
      const newMessage = await new Message({from: userId, to, content}).save()
      let convo = await Conversation.findOne({participants: {$all: [userId, to]}})
      if(convo) await Conversation.updateOne({_id: convo._id},{read:false,
        createdAt: new Date(),$push: {messages: {$each: [newMessage._id]}}})
      else await new Conversation({participants: [userId, to], messages:[newMessage._id]}).save()
      return newMessage
    },
    async createMessage(_, { to, content}, {req, User, Message, Conversation}){
      const userId = getUserId(req)
      if(userId === to) throw new Error('Cannot send message') //receiver == sender
      let receiver = await User.findById(to)
      if(!receiver) throw new Error('Cannot send message to this receiver') //recreive not exist
      const newMessage = await new Message({from: userId, to, content}).save()
      let convo = await Conversation.findOne({participants: {$all: [userId, to]}})
      if(convo) await Conversation.updateOne({_id: convo._id},{read:false,
        createdAt: new Date(),$push: {messages: {$each: [newMessage._id]}}})
      else await new Conversation({participants: [userId, to], messages:[newMessage._id]}).save()
      
      return newMessage
    },
    async mutations(_, { }, { }){
      return ""
    },
    async updateMessage(_, { id}, {req, Conversation, Message}){
      const userId = getUserId(req)
      return await Conversation.findOneAndUpdate({_id:id},{read: true}, { new: true })
    },
    async addViewsBooking(_, {office}, {Views}){
      return Views.findOneAndUpdate({office}, {$inc: {numBooking: 1}},{new: true});
    },
    async addViewsView(_, {office}, {Views}){
      return Views.findOneAndUpdate({office}, {$inc: {numView: 1}},{new: true});
    },
    async addMoneyToRevenue(_, { host, money }, { Revenue }) {
      return await Revenue.findOneAndUpdate({
        host
      }, {
          $inc: { total: money, withdrawable: money }
        }, { new: true })
    },
    async createRevenue(_, { host }, {Revenue}){
      const newRevenue = await new Revenue({
        host,
        total: 0,
        withdrawable: 0
      }).save()
      return newRevenue
    },
    bookmarkOffice: async (_, { office }, { req, Office, User }) => {
      const userId = getUserId(req, false)
      if(!userId) return 'You need to login to do this action.'
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      try{
        const user = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { bookmarks: office } },
          { new: true }
      )
      return 'Bookmark added'
      }catch(err) {return 'Cannot add bookmark :('}
  },
  unBookmarkOffice: async (_, { office }, { req, User }) => {
    const userId = getUserId(req, false)

    if(!userId) return 'You need to login to do this action.'
    try{
      const user = await User.findOneAndUpdate(
          { _id: userId },
          { $pull: { bookmarks: office } },
          { new: true }
      )
      return 'Bookmark removed'
    }catch(err) {return 'Cannot remove bookmark :('}
  },
  }
}
module.exports =  guestResolver
