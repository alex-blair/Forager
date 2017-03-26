import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ForageScreen from './components/ForageScreen'
import ShareScreen from './components/ShareScreen'
import MainScreen from './components/MainScreen'
import UploadImageScreen from './components/UploadImageScreen'
import TakePhotoScreen from './components/TakePhotoScreen'
import GetLocationScreen from './components/GetLocationScreen'
import GetResourcesScreen from './components/GetResourcesScreen'

const App = StackNavigator({
  Main: {screen: MainScreen},
  Forage: {screen: ForageScreen},
  Share: {screen: ShareScreen},
  UploadImage: {screen: UploadImageScreen},
  TakePhoto: {screen: TakePhotoScreen},
  GetLocation: {screen: GetLocationScreen},
  GetResources: {screen: GetResourcesScreen}
});

export default App
