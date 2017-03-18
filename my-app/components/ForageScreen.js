import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native';

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'

const navigationOptions = {
  title: 'Resources',
}

const ForageScreen = (props) => {
  return (
    <View>
      <HeaderText>Map</HeaderText>
      <DefaultText>Look at the map below to find resourcess</DefaultText>
    </View>
  )
}

export {
    ForageScreen,
    navigationOptions,
}
