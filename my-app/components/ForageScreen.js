import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native';

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'

class ForageScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };
  render() {
    return (
      <View>
        <HeaderText>Map</HeaderText>
        <DefaultText>Look at the map below to find resourcess</DefaultText>
      </View>
    );
  }
}

export default ForageScreen
