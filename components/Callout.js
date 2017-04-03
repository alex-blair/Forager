import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import Button from 'react-native-button'

import styles from './styles/StyleSheet'
import SmallHeaderText from './styles/textStyles/SmallHeaderText'

export default class Callout extends Component {
  render () {
    return (
      <View style={styles.mapContainer}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.name}>Mystery resource</Text>
            <Button
              containerStyle={styles.editButton} >
              <SmallHeaderText>Edit</SmallHeaderText>
            </Button>
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    )
  }
}
