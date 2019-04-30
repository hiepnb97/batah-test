require('cross-fetch/polyfill')
import getClient from './utils/getClient'
import {LOGIN, SIGNUP_USER, REQ_RESETPASSWORD, RESET_PASSWORD, SET_PASSWORD,
      SEARCH_OFFICE, SEARCH_OFFICE_BY_FILTER, UPDATE_IDENTITY, CREATE_REVIEW,
      CREATE_BOOKING, CREATE_VIEW, CREATE_BOOK_SCHEDULE, CREATE_PAYMENT, CREATE_PAYMENT_ACCOUNT, 
      CREATE_PAYPAL_INFORMATION, CREATE_CREDITCARD_INFORMATION,SEND_ADMIN, CREATE_REVENUE
    } from './utils/operations'

let token = ''
beforeEach(async () => {
  const client = getClient()
  const { data } = await client.mutate({ 
    mutation: LOGIN,
    variables: { email: 'pnbao96@gmail.com', password: '123456' }
  })
  token = data.login.token
})

test('Should login with corrected user and password', async()=>{
  const client = getClient()
  const {data} = await client.mutate({
    mutation: LOGIN,
    variables: {email: 'pnbao96@gmail.com', password:'123456'}
  })
  expect(data.login.user.email).toBe('pnbao96@gmail.com')
  expect(data.login.user.firstName).toBe('Bảo')
  expect(data.login.user.lastName).toBe('Phan')
  expect(data.login.user.phone).toBe('+84 349 689 410')
  expect(data.login.user.address).toBe('Đà Nẵng')
})

test('Should not login with incorrect password', async()=>{
  const client = getClient()
  await expect( client.mutate({
    mutation: LOGIN,
    variables: {email: 'pnbao96@gmail.com', password:'wrongpassword'}
  })).rejects.toThrow('Should not login with incorrect password')
})

test('Should not login with non-existed user', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: LOGIN,
      variables: {email: 'non-existed@gmail.com', password:'123456'}
    }
  )).rejects.toThrow('Should not login with non-existed user')
})

test('Should not signup user with existed email', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SIGNUP_USER,
      variables: {email: 'pnbao96@gmail.com', password:'bobobob',firstName:'Bao',lastName:'Phan Nguyen'}
    }
  )).rejects.toThrow('Should not signup user with existed email')
})

test('Should request reset password', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: REQ_RESETPASSWORD,
      variables: {email: 'hiepnb97@gmail.com'}
    }
  ))
})

test('Should reset password', async()=>{
  const client = getClient()
  await expect(
      client.mutate({
        mutation: RESET_PASSWORD,
        variables: {email: 'hiepnb97@gmail.com', password:'bobobob'}
      }
    ))
})

test('Should set password', async()=>{
  const client = getClient()
  await expect(
      client.mutate({
        mutation: SET_PASSWORD,
        variables: {email: 'hiepnb97@gmail.com', confirmPassword:'bobobob'}
      }
    ))
})

test('Should search all office', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "all" }
  })
  expect(data.searchOffice.length).toBeGreaterThan(1)
  expect(data.searchOffice[0].title).toBe('Phúc Quý Office')
  expect(data.searchOffice[0].address).toBe('15 Nguyễn Văn Thương - Quận Bình Thạnh, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('meeting')
})

test('Should search offices contain -viet land-', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "viet land", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "all" }
  })
  expect(data.searchOffice.length).toBe(1)
  expect(data.searchOffice[0].title).toBe('Việt Land Office')
  expect(data.searchOffice[0].address).toBe('37 Cộng Hòa, Tân Bình, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('meeting')
})

test('Should search offices contain -Việt Land- have mark', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "Việt Land", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "all" }
  })
  expect(data.searchOffice.length).toBe(1)
  expect(data.searchOffice[0].title).toBe('Việt Land Office')
  expect(data.searchOffice[0].address).toBe('37 Cộng Hòa, Tân Bình, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('meeting')
})

test('Should search offices contain -     Việt     Land     -', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "    Việt     Land     ", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "all" }
  })
  expect(data.searchOffice.length).toBe(1)
  expect(data.searchOffice[0].title).toBe('Việt Land Office')
  expect(data.searchOffice[0].address).toBe('37 Cộng Hòa, Tân Bình, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('meeting')
})

test('Should search meeting offices', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "meeting" }
  })
  expect(data.searchOffice.length).toBeGreaterThan(1)
  expect(data.searchOffice[1].title).toBe('Office-tel Lexington')
  expect(data.searchOffice[1].address).toBe('67 Mai Chí Thọ, phường An Phú, Quận 2, Hồ Chí Minh')
  expect(data.searchOffice[1].category).toBe('meeting')
})

test('Should search talk show offices', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "talkshow" }
  })
  expect(data.searchOffice.length).toBeGreaterThan(1)
  expect(data.searchOffice[0].title).toBe('Phòng Hội Nghị 503')
  expect(data.searchOffice[0].address).toBe('39 Trần Quốc Thảo, P6, Quận 3, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('talkshow')
})

test('Should not return search result if title not match', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "nothaveoffice", area: {ga:{from:0,to:1000},ma:{from:0,to:1000}}, category: "all" }
  })
  expect(data.searchOffice.length).toBe(0)
})

test('Should not return search result if area not match', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "", area: {ga:{from:0,to:1},ma:{from:0,to:1}}, category: "all" }
  })
  expect(data.searchOffice.length).toBe(0)
})


test('Should search office if dont fill area', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE,
    variables: { searchTerm: "",category: "all" }
  })
  expect(data.searchOffice.length).toBeGreaterThan(1)
  expect(data.searchOffice[0].title).toBe('Phúc Quý Office')
  expect(data.searchOffice[0].address).toBe('15 Nguyễn Văn Thương - Quận Bình Thạnh, Hồ Chí Minh')
  expect(data.searchOffice[0].category).toBe('meeting')
})

test('Should search office by filter', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"], minNumSeats:1, maxNumSeats:20, amenities: ["airConditioning"] }
  })
  expect(data.searchOfficeByFilter.length).toBe(2)
  expect(data.searchOfficeByFilter[0].title).toBe('Phúc Quý Office')
  expect(data.searchOfficeByFilter[0].address).toBe('15 Nguyễn Văn Thương - Quận Bình Thạnh, Hồ Chí Minh')
  expect(data.searchOfficeByFilter[0].category).toBe('meeting')
  expect(data.searchOfficeByFilter[0].numSeats).toBe(15)
})

test('Should search office by filter contain tv', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"], minNumSeats:1, maxNumSeats:20, amenities: ["tv"] }
  })
  expect(data.searchOfficeByFilter.length).toBe(1)
  expect(data.searchOfficeByFilter[0].title).toBe('Office-tel Lexington')
  expect(data.searchOfficeByFilter[0].address).toBe('67 Mai Chí Thọ, phường An Phú, Quận 2, Hồ Chí Minh')
  expect(data.searchOfficeByFilter[0].category).toBe('meeting')
  expect(data.searchOfficeByFilter[0].numSeats).toBe(10)
})

test('Should search office by filter without amenities', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"], minNumSeats:1, maxNumSeats:20}
  })
  expect(data.searchOfficeByFilter.length).toBe(2)
  expect(data.searchOfficeByFilter[1].title).toBe('Office-tel Lexington')
  expect(data.searchOfficeByFilter[1].address).toBe('67 Mai Chí Thọ, phường An Phú, Quận 2, Hồ Chí Minh')
  expect(data.searchOfficeByFilter[1].category).toBe('meeting')
  expect(data.searchOfficeByFilter[1].numSeats).toBe(10)
})

test('Should search office by filter without seats', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"],  amenities: ["tv"]}
  })
  expect(data.searchOfficeByFilter.length).toBe(1)
  expect(data.searchOfficeByFilter[0].title).toBe('Office-tel Lexington')
  expect(data.searchOfficeByFilter[0].address).toBe('67 Mai Chí Thọ, phường An Phú, Quận 2, Hồ Chí Minh')
  expect(data.searchOfficeByFilter[0].category).toBe('meeting')
  expect(data.searchOfficeByFilter[0].numSeats).toBe(10)
})

test('Should search office by filter without seats and amenities', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"]}
  })
  expect(data.searchOfficeByFilter.length).toBe(2)
  expect(data.searchOfficeByFilter[0].title).toBe('Phúc Quý Office')
  expect(data.searchOfficeByFilter[0].address).toBe('15 Nguyễn Văn Thương - Quận Bình Thạnh, Hồ Chí Minh')
  expect(data.searchOfficeByFilter[0].category).toBe('meeting')
  expect(data.searchOfficeByFilter[0].numSeats).toBe(15)
})

test('Not return office by filter', async()=>{
  const client = getClient()
  const {data} = await client.query({
    query: SEARCH_OFFICE_BY_FILTER,
    variables: { id:["5c98f410c54a9e3df2dc4cd7","5c98f80fc54a9e3df2dc4ce7"],  amenities: ["abc"]}
  })
  expect(data.searchOfficeByFilter.length).toBe(0)
})

test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        pictures: [
          "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/44639176_2009766055798348_2999842138641924096_n.jpg",
          "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/43534318_1861890500596067_2535080751129427968_n.jpg"
        ],
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()// getClientt
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})


test('Should update identity', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: UPDATE_IDENTITY,
      variables: {
        email: 'hiepnb97@gmail.com',
        firstName: 'Hiep',
        lastName: 'Hoang',
        phone: '0123456789'
      }
    }
  ))
})

test('Can create review', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVIEW,
      variables: {
        text: "rdghdf",
        stars: 2.5,
        cleanliness: 2,
        accuracy: 3,
        location: 3,
        checkIn: 2,
        office: "5c98f80fc54a9e3df2dc4ce7",
        user: "5c9edd213a7e4905ac5f6fe6",
        __v: 0,
        email: "",
      }
    }
  ))
})

test('Can create booking', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOKING,
      variables: {
        bookee: "5ca481cedcff777e5e3a3270",
        office: "5c999cc7c54a9e3df2dc4d4f",
        bookedSchedules: "5ca4826adcff777e5e3a3273",
        payment: "5ca4826adcff777e5e3a3272",
        createdAt: "2019-04-03T09:52:42.477Z",
        __v: 0,
        email: "kiennd115@gmail.com",
        firstName: "Doi",
        lastName: "Nguyen",
        phone: "0963392888"
      }
    }
  ))
})

test('Can view office', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_VIEW,
      variables: {
        office: "5c999a17c54a9e3df2dc4d34"
      }
    }
  ))
})

test('Can create book schedule', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_BOOK_SCHEDULE,
      variables: {
        slots: [
          4
        ],
        office: "5c98f80fc54a9e3df2dc4ce7"
      }
    }
  ))
})

test('Can create payment', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT,
      variables: {
        serviceFee: 100000,
        officePrice: 500000,
        totalPrice: 1000000,
        paymentMethod: "paypal",
      }
    }
  ))
})

test('Can create payment account', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYMENT_ACCOUNT,
      variables: {
        type: "PAYPAL",
        paypal: "5c935886f3db480b60662303",
        creditcard: "5c935844f3db480b60662302",
      }
    }
  ))
})

test('Can create paypal information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_PAYPAL_INFORMATION,
      variables: {
        email: "hiepnb97@gmail.com"
      }
    }
  ))
})

test('Can create credit card information', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_CREDITCARD_INFORMATION,
      variables: {
        cardNumber: "123",
        expiresOnMonth: 5,
        expiresOnYear: 2020,
        securityCode: "123456789",
        fullName: "Hoang Van Hiep",
        country: "VietNam",
      }
    }
  ))
})

test('Can send admin', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SEND_ADMIN,
      variables: {
        participants: [
          "5ca481cedcff777e5e3a3270",
          "5ca4832bdcff777e5e3a3275"
        ],
        messages: [
          "5ca487bf17d9911ae1c88bf1",
          "5ca487d817d9911ae1c88bf3"
        ],
        read: false,
      }
    }
  ))
})

test('Can create revenue', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: CREATE_REVENUE,
      variables: {
        total: 6543000,
        withdrawable: 0,
        host: "5c973c0bf4b1381a4a117f3a",
      }
    }
  ))
})