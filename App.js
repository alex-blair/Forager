import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import { ForageScreen, navigationOptions as forageNav } from './components/ForageScreen'
import { ShareScreen, navigationOptions as shareNav } from './components/ShareScreen'
import  { MainScreen, navigationOptions as mainNav } from './components/MainScreen'
import UploadImageScreen from './components/UploadImageScreen'
import TakePhotoScreen from './components/TakePhotoScreen'
import GetLocationScreen from './components/GetLocationScreen'
import GetResourcesScreen from './components/GetResourcesScreen'

import HeaderText from './components/textStyles/HeaderText'

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
