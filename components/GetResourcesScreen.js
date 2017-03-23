import React from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

import DefaultText from './textStyles/DefaultText'
import styles from './StyleSheet'

import getResourcesFromApi from './api'

const GetResourcesScreen = (props) => {
  const { navigate } = props.navigation
    return (
      <View style={styles.container}>
        <DefaultText>
          Here are some resources
        </DefaultText>
      </View>
    )
}

export default GetResourcesScreen


// const GetResourcesScreen = React.createClass ({
//   getInitialState() {
//     return {
//       resources: null
//     }
//   },
//   handleClick
// }
