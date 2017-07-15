import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

import DefaultText from './styles/textStyles/DefaultText'
import styles from './styles/StyleSheet'

import { gql, graphql } from 'react-apollo'

const GetResourcesScreen = (props) => {
  return (
    <View style={styles.container}>
      <DefaultText>
        {props.data.loading && <Text>Loading</Text>}
        {!props.data.loading && JSON.stringify(props)}
      </DefaultText>
    </View>
  )
}

GetResourcesScreen.propTypes = {
  data: PropTypes.object
}

const getResourcesQuery = graphql(gql`
  {
    viewer
    {
      resources
      {
        category
        item
      }
    }
  }
`)

export default getResourcesQuery(GetResourcesScreen)
