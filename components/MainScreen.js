import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Button from 'react-native-button'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'

import styles from './styles/StyleSheet'

const MainScreen = (props) => {
  const { navigate } = props.navigation
  return (
    <View style={styles.container}>
    <Text>Whoop for redux!</Text>
      <Button
      containerStyle={[styles.halfPageButton, styles.greenBackground]}
      onPress={() => navigate('Forage')}>
        <HeaderText>Forage</HeaderText>
      </Button>
      <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('Share')}>
          <HeaderText>Share</HeaderText>
      </Button>
    </View>
  )
}

MainScreen.navigationOptions = {
  title: 'Home'
}

export default MainScreen
