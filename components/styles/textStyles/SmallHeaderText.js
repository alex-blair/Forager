import React from 'react'
import { Text } from 'react-native'

const SmallHeaderText = (props) => {
  return (
    <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fef2e4'}}>
      {props.children}
    </Text>
  )
}

export default SmallHeaderText
