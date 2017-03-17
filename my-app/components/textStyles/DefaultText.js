import React from 'react'
import { Text } from 'react-native'

const DefaultText = (props) => {
  return (
    <Text style={{fontSize: 15}}>
      {props.children}
    </Text>
  )
}

export default DefaultText


// colors
// off-white: #fef2e4
// onion orange: #fd974f
// red pepper red: #C60000
// driftwood brown: #805a3b
// blue: #919CA1
// purple: #9FA1AF
// pretty grey: #9FA1AF'
