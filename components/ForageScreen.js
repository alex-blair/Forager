  import React, { Component } from 'react'
  import { Components, Location } from 'expo' //do you still need to import location?
  import { View, Text } from 'react-native'
  import Button from 'react-native-button'

  import DefaultText from './styles/textStyles/DefaultText'
  import HeaderText from './styles/textStyles/HeaderText'
  import styles from './styles/StyleSheet'

  class ForageScreen extends Component {

    placePin (position) {
      this.props.addPin(position)
    }

    render (props) {
      return (
        <View style={styles.container}>
          <View>
            <HeaderText>Map</HeaderText>
            <DefaultText>Move around the map to find resourcess</DefaultText>
            <Components.MapView
              style={styles.mapBox}
              initialRegion={this.props.currentPos}
            >
              {this.props.pins.map((pos, i) => <Components.MapView.Marker key={i} coordinate={pos} />)}
            </Components.MapView>
            <Button
            containerStyle={[styles.halfPageButton, styles.greenBackground]}
            onPress={() => this.placePin(this.props.currentPos)}>
              <HeaderText>Add Pin</HeaderText>
            </Button>
          </View>
        </View>
      )
    }
  }

  ForageScreen.navigationOptions = {
    title: 'Forage'
  }

  export default ForageScreen
