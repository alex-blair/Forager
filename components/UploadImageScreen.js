import React, { Component } from 'react'
import { Components } from 'expo'
import { StackNavigator } from 'react-navigation'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Expo from 'expo'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'
import styles from './styles/StyleSheet'

export default class UploadImageScreen extends Component {
  state = {
    image: null,
  }

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage}>
          <View>
            <Text>Pick an image from camera roll</Text>
          </View>
        </TouchableOpacity>

        {image &&
          <Image source={{uri: image}} style={{width: 200, height: 200}} /> }
      </View>
    );
  }

  _pickImage = async () => {
    let result = await Expo.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  }
}

UploadImageScreen.navigationOptions = {
  title: 'Upload'
}

Expo.registerRootComponent(UploadImageScreen);
