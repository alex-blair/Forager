import React, { PropTypes } from 'react'
import { View } from 'react-native'

import DefaultText from './styles/textStyles/DefaultText'
import styles from './styles/StyleSheet'

import { gql, graphql } from 'react-apollo'

const FetchResourcesScreen = (props) => {
  return (
    <View style={styles.container}>
      <DefaultText>
        {JSON.stringify(props.data.viewer)}
      </DefaultText>
    </View>
  )
}

FetchResourcesScreen.propTypes = {
  data: PropTypes.object
}

FetchResourcesScreen.navigationOptions = {
  title: 'Resources'
}

const fetchResourcesQuery = graphql(gql`
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

export default fetchResourcesQuery(FetchResourcesScreen)
