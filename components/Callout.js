import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Button from 'react-native-button'

import styles from './styles/StyleSheet'
import HeaderText from './styles/textStyles/HeaderText'

export default class Callout extends Component {
  render () {
    return (
      <View style={styles.mapContainer}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.name}>Unknown</Text>
            <Button
              containerStyle={styles.greenBackground} >
              <HeaderText>Edit</HeaderText>
            </Button>
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    )
  }
}
