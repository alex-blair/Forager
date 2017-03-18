import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation' ;
import Button from 'react-native-button';

import styles from './components/StyleSheet'
import ForageScreen from './components/ForageScreen'
import { ShareScreen, navigationOptions } from './components/ShareScreen'
import HeaderText from './components/textStyles/HeaderText'


class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Forager',
    };
  render() {
    const { navigate } = this.props.navigation;
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
    );
  }
}

const App = StackNavigator({
  Main: {screen: MainScreen},
  Forage: {screen: ForageScreen},
  Share: {screen: ShareScreen},
});

export default App
