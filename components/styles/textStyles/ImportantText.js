import React from 'react'
import { Text } from 'react-native'

const ImportantText = (props) => {
  return (
    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#C60000'}}>
      {props.children}
    </Text>
  )
}

export default ImportantText
