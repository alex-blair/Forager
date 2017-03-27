import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home'

class AppContainer extends Component {
  render() {
    return <Home {...this.props} />
    //About View, Settings View etc
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer)
