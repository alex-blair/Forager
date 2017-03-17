import React from 'react'
import { Text } from 'react-native'

const HeaderText = (props) => {
  return (
        <Text style={{fontWeight: "bold", fontSize: 30}}>
          {props.children}
        </Text>
    )
  }

export default HeaderText
