require('cross-fetch/polyfill')

import getClient from './utils/getClient'
import { GET_OFFICE, GET_OFFICES, LOGIN, UPDATE_IDENTITY, CREATE_REVIEW,
  CREATE_BOOKING, CREATE_VIEW, CREATE_BOOK_SCHEDULE, CREATE_PAYMENT, CREATE_PAYMENT_ACCOUNT, 
  CREATE_PAYPAL_INFORMATION, CREATE_CREDITCARD_INFORMATION,SEND_ADMIN, CREATE_REVENUE } from './utils/operations'

let token = ''
beforeEach(async () => {
  const client = getClient()
  const { data } = await client.mutate({ 
    mutation: LOGIN,
    variables: { email: 'pnbao96@gmail.com', password: '123456' }
  })
  token = data.login.token
})
test('Should return office', async () => {
  const client = getClient(token)

  const { data } = await client.query({
    query: GET_OFFICE,
    variables: { id: '5c98f410c54a9e3df2dc4cd7' }
  })
  expect(data.getOffice).not.toBeNull()
})

test('Should return offices', async () => {
  const client = getClient(token)

  const { data } = await client.query({
    query: GET_OFFICES
  })

  expect(data.getOffices).toHaveProperty('offices')
  expect(data.getOffices).toHaveProperty('booking')
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
