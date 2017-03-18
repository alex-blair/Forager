import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation' ;

import { ForageScreen, navigationOptions as forageNav } from './components/ForageScreen'
import { ShareScreen, navigationOptions as shareNav } from './components/ShareScreen'
import  { MainScreen, navigationOptions as MainNav } from './components/MainScreen'

import HeaderText from './components/textStyles/HeaderText'

const App = StackNavigator({
  Main: {screen: MainScreen},
  Forage: {screen: ForageScreen},
  Share: {screen: ShareScreen},
});

export default App
