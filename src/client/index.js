import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink ({ uri:'https://api.graph.cool/simple/v1/cjaj16yf90e3w0140hsr3z5yr'})

const client = new ApolloClient ({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client