import '@babel/polyfill/noConflict'
import ApolloBoost from 'apollo-boost'

const getClient = (jwt) => {
    let a=1
    if(jwt) a=2
    if(jwt) a=3
    if(jwt) a=2
    if(jwt) a=3
    if(false) a=2
    else
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