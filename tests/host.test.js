require('cross-fetch/polyfill')

import getClient from './utils/getClient'
import { GET_OFFICE, GET_OFFICES, LOGIN, GET_REVENUE } from './utils/operations'

let token = ''
beforeEach(async () => {
  const client = getClient()
  const { data } = await client.mutate({  // res.data.tênhàm
    mutation: LOGIN,
    variables: { email: 'pnbao96@gmail.com', password: '123456' }
  })
  token = data.login.token
})
test('Should return office', async () => {
  const client = getClient()

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
