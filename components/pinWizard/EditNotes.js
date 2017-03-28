import React from 'react'
import { Text } from 'react-native'

const EditNotes = props => {
  return <Text>notes{JSON.stringify(props.pin)}</Text>
}

export default EditNotes
