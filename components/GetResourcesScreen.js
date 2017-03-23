import React from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

import DefaultText from './textStyles/DefaultText'
import styles from './StyleSheet'

import {getResourcesFromApi} from './Api'

const GetResourcesScreen = React.createClass ({
  getInitialState() {
    return {
      resources: null
    }
  },
  componentDidMount () {
    getResourcesFromApi()
      .then(resources => {
        this.renderResources(resources)
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  },
  renderResources (resources) {
    this.setState({
      resources: resources
    })
  },
  render () {
    return (
      <View style={styles.container}>
        <DefaultText>
          Here are some resources 
          {JSON.stringify(this.state.resources)}
        </DefaultText>
      </View>
    )
  }
})

export default GetResourcesScreen
