
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client'

Vue.use(VueApollo)

export default (apolloClient: ApolloClient<any>): VueApollo => new VueApollo({
  defaultClient: apolloClient,
})
