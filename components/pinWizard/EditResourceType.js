import React, { Component } from 'react'
import { TextInput, View, Button } from 'react-native'

import styles from '../../'

class EditResourceType extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render () {
    return (
      <View>
        <TextInput
          style={{height:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={() => this.props.saveResourceType(this.state.text)}
          title="Add Resource"
        />
      </View>
    )
  }
}

export default EditResourceType
