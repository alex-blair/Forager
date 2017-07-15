import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import reducers from './reducers'
import { getCurrentPosition } from './actions/pins'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware)
))

import { StackNavigator } from 'react-navigation'

import ForageScreen from './components/ForageScreen'
import ShareScreen from './components/ShareScreen'
import MainScreen from './components/MainScreen'
import UploadImageScreen from './components/UploadImageScreen'
import TakePhotoScreen from './components/TakePhotoScreen'
import GetResourcesScreen from './components/GetResourcesScreen'
// import Callout from './components/Callout'

import EditPin from './containers/EditPin'
import ForageContainer from './containers/ForageContainer'

const NavigateApp = StackNavigator({
  Main: {screen: MainScreen},
  Forage: {screen: ForageScreen},
  Share: {screen: ShareScreen},
  UploadImage: {screen: UploadImageScreen},
  TakePhoto: {screen: TakePhotoScreen},
  GetResources: {screen: GetResourcesScreen},
  ForageContainer: { screen: ForageContainer },
  EditPin: { screen: EditPin }
  // Callout: { screen: Callout }
})

store.dispatch(getCurrentPosition()) // Potentially move to ForageScreen?

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://forager-server.herokuapp.com/graphql'
  })
})

const App = () => (
  <ApolloProvider client={client} store={store}>
    <NavigateApp />
  </ApolloProvider>
)

export default App
