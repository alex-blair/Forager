import React from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View, Text, Image } from 'react-native'
import Expo from 'expo'

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'
import styles from './StyleSheet'

export default class GetLocationScreen extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <Text>
          <Text>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}
