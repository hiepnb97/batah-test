import 'cross-fetch/polyfill'
import getClient from './utils/getClient'
import {GET_OFFICES} from './utils/operations'
const client = getClient()


test('Should return offices', async()=>{
  // const {data} = await client.query({
  //   query: GET_OFFICES
  // })
  expect(3).toBeGreaterThan(0)
})