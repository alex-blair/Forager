import React from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'
import styles from './StyleSheet'

const navigationOptions = {
  title: 'Resources',
}

const ForageScreen = (props) => {
  return (
    <View style={styles.container}>
      <HeaderText>Map</HeaderText>
      <DefaultText>Look at the map below to find resourcess</DefaultText>
      <Components.MapView
          style={styles.mapBox}
          initialRegion={{
            latitude: -36.886763,
            longitude: 174.760321,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        />
    </View>
  )
}


export {
    ForageScreen,
    navigationOptions,
}
