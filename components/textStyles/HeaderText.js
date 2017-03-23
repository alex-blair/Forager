import React from 'react'
import { Text } from 'react-native'

const HeaderText = (props) => {
  return (
        <Text style={{fontWeight: "bold", fontSize: 30, color: '#fef2e4'}}>
          {props.children}
        </Text>
    )
  }

export default HeaderText
