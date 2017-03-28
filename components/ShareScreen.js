import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import Button from 'react-native-button'

import DefaultText from './styles/textStyles/DefaultText'
import HeaderText from './styles/textStyles/HeaderText'
import styles from './styles/StyleSheet'

const ShareScreen = (props) => {
  const { navigate } = props.navigation
    return (
      <View style={styles.container}>
        <DefaultText>
          What have you found?
        </DefaultText>
        <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('TakePhoto')}>
          <HeaderText>Take a photo</HeaderText>
        </Button>
        <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('UploadImage')}>
          <HeaderText>Upload an image</HeaderText>
        </Button>
        <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('EditPin')}>
          <HeaderText>Add a pin</HeaderText>
        </Button>
      </View>
    )
}

ShareScreen.navigationOptions = {
  title: 'Share'
}

export default ShareScreen
