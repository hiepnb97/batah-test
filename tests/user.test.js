import 'cross-fetch/polyfill'
import getClient from './utils/getClient'
import {GET_CURRENT_USER, LOGIN, SIGNUP_USER} from './utils/operations'
const client = getClient()
test('Should return token', async()=>{
  const {data} = await client.mutate({  // res.data.tênhàm
    mutation: LOGIN,
    variables: {email: 'pnbao96@gmail.com', password:'123456'}
  })
  expect(data.login.user.email).toBe('pnbao96@gmail.com')
  expect(data.login.user.lastName).toBe('Phan')
})

test('Should not login with wrong credentials', async()=>{
  await expect(
    client.mutate({
      mutation: LOGIN,
      variables: {email: 'asd@gmail.com', password:'123456'}
    }
  )).rejects.toThrow()
})

test('Should not signup user with existed email', async()=>{
  await expect(
    client.mutate({
      mutation: SIGNUP_USER,
      variables: {email: 'pnbao96@gmail.com', password:'bobobob',firstName:'Bao',lastName:'Phan Nguyen'}
    }
  )).rejects.toThrow()
})

// test('Should return user', async()=>{
//   const {data} = await client.query({  // res.data.tênhàm
//     query: GET_CURRENT_USER,
//     variables: {email: 'pnbao96@gmail.com', password:'123456'}
//   })
//   expect(data.login.user.email).toBe('xiaosasori@gmail.com')
//   expect(data.login.user.lastName).toBe('Nguyen Minh')
// })