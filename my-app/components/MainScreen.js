import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation' ;
import Button from 'react-native-button';

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'

import styles from './StyleSheet'

const navigationOptions = {
  title: 'Forager',
}

const MainScreen = (props) => {
  const { navigate } = props.navigation
  return (
    <View style={styles.container}>
      <Button
      containerStyle={[styles.halfPageButton, styles.greenBackground]}
      onPress={() => navigate('Forage')}>
        <HeaderText>Forage</HeaderText>
      </Button>
      <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('Share')}>
          <HeaderText> Share </HeaderText>
      </Button>
    </View>
  )
}

export {
  MainScreen,
  navigationOptions,
}
