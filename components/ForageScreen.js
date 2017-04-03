import React, { Component, PropTypes } from 'react'
import { Components } from 'expo' // do you still need to import location?
import { View } from 'react-native'
import Button from 'react-native-button'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'
import styles from './styles/StyleSheet'

import Callout from './Callout'

class ForageScreen extends Component {
  placePin (currentPos) {
    this.props.addPin(currentPos)
  }

  render (props) {
    return (
      <View style={styles.container}>
        <View>
          <DefaultText>Click on a pin to view a resource</DefaultText>
          <Components.MapView
            style={styles.mapBox}
            initialRegion={this.props.currentPos}
          >
            {this.props.pinList.map((pos, i) => <Components.MapView.Marker key={i} coordinate={pos} calloutOffset={{ x: -8, y: 28 }} pinColor={'#376565'}>
              <Components.MapView.Callout tooltip style={styles.callout}>
                <Callout />
              </Components.MapView.Callout></Components.MapView.Marker>
          )}
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

ForageScreen.propTypes = {
  addPin: PropTypes.func,
  currentPos: PropTypes.object,
  pinList: PropTypes.array
}

// ForageScreen.navigationOptions = {
//   title: 'Forage'
// }

// title={pos.title} description={pos.description}

export default ForageScreen
