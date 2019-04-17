require('cross-fetch/polyfill')
import getClient from './utils/getClient'
import {GET_CURRENT_USER, LOGIN, SIGNUP_USER, REQ_RESETPASSWORD, RESET_PASSWORD, UPDATE_PROFILE, 
      SEARCH_OFFICE} from './utils/operations'

let token = ''
beforeEach(async () => {
  const client = getClient()
  const { data } = await client.mutate({  // res.data.tênhàm
    mutation: LOGIN,
    variables: { email: 'pnbao96@gmail.com', password: '123456' }
  })
  token = data.login.token
})
/*
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
  })).rejects.toThrow()
})

test('Should not login with non-existed user', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: LOGIN,
      variables: {email: 'non-existed@gmail.com', password:'123456'}
    }
  )).rejects.toThrow()
})

test('Should not signup user with existed email', async()=>{
  const client = getClient()
  await expect(
    client.mutate({
      mutation: SIGNUP_USER,
      variables: {email: 'pnbao96@gmail.com', password:'bobobob',firstName:'Bao',lastName:'Phan Nguyen'}
    }
  )).rejects.toThrow()
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
  const client = getClient(token)
  await expect(
    client.mutate({
      mutation: REQ_RESETPASSWORD,
      variables: {email: 'hiepnb97@gmail.com', password:'bobobob'}
    }
  ))
})
*/
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