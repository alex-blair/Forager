import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation' ;
import Button from 'react-native-button';

import ForageScreen from './components/ForageScreen'
import { ShareScreen, navigationOptions } from './components/ShareScreen'


class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Forager',
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button
        containerStyle={{flex: 2, overflow:'hidden', borderRadius:4, backgroundColor:'#376565', alignItems: 'center',
        justifyContent: 'center'}}
        style={[styles.white, styles.bold]}
        onPress={() => navigate('Forage')}>
        Forage
        </Button>
        <Button
          containerStyle={{flex: 2, overflow:'hidden', borderRadius:4, backgroundColor:'#fef2e4', alignItems: 'center',
          justifyContent: 'center'}}
          style={[styles.green, styles.bold]}
          onPress={() => navigate('Share')}>
            Share
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#fef2e4',
    fontSize: 30,
  },
  green: {
    color: '#376565',
    fontSize: 30,
  },
  bold: {
    fontWeight: 'bold',
  }
});

const App = StackNavigator({
  Main: {screen: MainScreen},
  Forage: {screen: ForageScreen},
  Share: {screen: ShareScreen},
});

export default App
