import React from 'react'
import { Text } from 'react-native'

const DefaultText = (props) => {
  return (
    <Text style={{fontSize: 15, textAlign: 'center'}}>
      {props.children}
    </Text>
  )
}

export default DefaultText
