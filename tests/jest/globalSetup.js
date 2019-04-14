require('@babel/register')
require('@babel/polyfill/noConflict')

const server = require('../../server')

module.exports = async () => {
    global.httpServer = await server.listen(3000)
}