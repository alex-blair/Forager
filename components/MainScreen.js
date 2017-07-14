import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Button from 'react-native-button'

import HeaderText from './styles/textStyles/HeaderText'

import styles from './styles/StyleSheet'

const MainScreen = (props) => {
  const { navigate } = props.navigation
  return (
    <View style={styles.container}>
      <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('ForageContainer')}>
        <HeaderText>Forage</HeaderText>
      </Button>
      <Button
        containerStyle={[styles.halfPageButton, styles.greenBackground]}
        onPress={() => navigate('Share')}>
        <HeaderText>Share</HeaderText>
      </Button>
    </View>
  )
}

MainScreen.propTypes = {
  navigation: PropTypes.object
}

MainScreen.navigationOptions = {
  title: 'Home'
}

export default MainScreen
