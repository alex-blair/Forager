import React, { Component } from 'react'
import { Components, Location } from 'expo'
import { View, Text } from 'react-native'
import Button from 'react-native-button'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'
import styles from './styles/StyleSheet'

class ForageScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount () {
    const removeWatch = Location.watchPositionAsync(
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
      (position) => {
        this.setState({
          loading: false,
          currentPos: {
            ...position.coords,
            latitudeDelta: 0.05,
            longitudeDelta: 0.04
          }
        })
      }
    )
    console.log('Hello' + JSON.stringify(removeWatch))
    //this.setState({ removeWatch })
  }

  componentWillUnmount () {
    if (this.state.removeWatch) {
      this.state.removeWatch()
    }
  }

  addPin (position) {
    this.props.addPin(position)
  }

  render (props) {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <Text>Trying to get your position...</Text>
            : (
              <View>
                <HeaderText>Map</HeaderText>
                <DefaultText>Move around the map to find resourcess</DefaultText>
                <Components.MapView
                  style={styles.mapBox}
                  initialRegion={this.state.currentPos}
                >
                  {this.props.pins.map((pos, i) => <Components.MapView.Marker key={i} coordinate={pos} />)}
                </Components.MapView>
                <Button
                containerStyle={[styles.halfPageButton, styles.greenBackground]}
                onPress={() => this.addPin(this.state.currentPos)}>
                  <HeaderText>Add Pin</HeaderText>
                </Button>
              </View>
            )
        }
      </View>
    )
  }
}

ForageScreen.navigationOptions = {
  title: 'Forage'
}

export default ForageScreen
