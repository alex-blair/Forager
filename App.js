import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ForageScreen from './components/ForageScreen'
import ShareScreen from './components/ShareScreen'
import MainScreen from './components/MainScreen'
import UploadImageScreen from './components/UploadImageScreen'
import TakePhotoScreen from './components/TakePhotoScreen'
import GetResourcesScreen from './components/GetResourcesScreen'

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
})

const App = () => (
  <Provider store={store}>
    <NavigateApp />
  </Provider>
);

export default App
