import React from 'react'
import { View, Text } from 'react-native'

import DefaultText from './styles/textStyles/DefaultText'
import styles from './styles/StyleSheet'

import {getResourcesFromApi} from './Api'

const GetResourcesScreen = React.createClass({
  getInitialState () {
    return {
      resources: null,
      loading: false
    }
  },
  componentDidMount () {
    this.setState({ loading: true })
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
      resources: resources,
      loading: false
    })
  },
  render () {
    return (
      <View style={styles.container}>
        <DefaultText>
          {this.state.loading && <Text>Loading</Text>}
          {this.state.resources && JSON.stringify(this.state.resources)}
        </DefaultText>
      </View>
    )
  }
})

export default GetResourcesScreen
