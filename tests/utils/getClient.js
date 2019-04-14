import '@babel/polyfill/noConflict'
import ApolloBoost from 'apollo-boost'

const getClient = (jwt) => {
    return new ApolloBoost({
        uri: 'http://localhost:3000',
        request(operation) {
            if (jwt) {
                operation.setContext({
                    headers: {
                        authorization: jwt
                    }
                })
            }
        }
    })
}

module.exports = getClient