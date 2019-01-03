import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'

import absintheSocketLink from './absinthe-socket-link'

const httpLink = new HttpLink({
	uri: 'http://localhost:4000',
})

// const wsLink = new WebSocketLink({
// 	uri: 'ws://localhost:4000/ws/websocket',
// 	options: {
// 		reconnect: false,
// 	},
// })

const wsLink = absintheSocketLink

const link = split(
	// split based on operation type
	({ query }) => {
		const mainDeinition = getMainDefinition(query)
		return mainDeinition.kind === 'OperationDefinition' &&
		mainDeinition.operation === 'subscription'
	},
	wsLink,
	httpLink,
)

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export default new ApolloClient({
	link,
	cache,
})
