import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Text } from 'react-native'

import DefaultText from './textStyles/DefaultText'
import HeaderText from './textStyles/HeaderText'

const navigationOptions = {
  title: 'Add New Resource',
};

const ShareScreen = (props) => {
    return (
      <View>
        <Text>
          Add a new resource to the map!
        </Text>
      </View>
    )
}

export {
    ShareScreen, navigationOptions
}
