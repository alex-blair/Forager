import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

import { connect } from 'react-redux'

import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

import { connect } from 'react-redux'

class Home extends Component {
  searchPressed() {
    this.props.fetchResources()
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <View>
          <TouchableHighlight onPress={ () => this.searchPressed() }>
            <Text>Fetch Resources</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home)