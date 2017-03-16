import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation' ;
import Button from 'react-native-button';
// import { ForageScreen } from ./components/ForageScreen.js ;

class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Forager',
    };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button
        containerStyle={{flex: 2, overflow:'hidden', borderRadius:4, backgroundColor:'skyblue', alignItems: 'center',
        justifyContent: 'center'}}
        style={[styles.white, styles.bold]}
        onPress={() => navigate('Forage')}>
        Forage
        </Button>
        <Button
          containerStyle={{flex: 2, overflow:'hidden', borderRadius:4, backgroundColor:'powderblue', alignItems: 'center',
          justifyContent: 'center'}}
          style={[styles.white, styles.bold]}
          onPress={() => navigate('Share')}>
            Share
        </Button>
      </View>
    );
  }
}

class ForageScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };
  render() {
    return (
      <View>
        <Text>Look at the map below to find resources</Text>
      </View>
    );
  }
}

class ShareScreen extends React.Component {
  static navigationOptions = {
    title: 'Add New Resource',
  };
  render() {
    return (
      <View>
        <Text>Add a new resource to the map!</Text>
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
    color: '#fff',
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
