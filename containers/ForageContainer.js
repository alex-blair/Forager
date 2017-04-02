// "eslint:recommended", "plugin:react/recommended"

import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as pinActions from '../actions/pins/'

import ForageScreen from '../components/ForageScreen'

class ForageContainer extends Component {
  render () {
    return <ForageScreen pinList={this.props.pinList} addPin={this.props.addPin} currentPos={this.props.currentPos} />
  }
}

const mapStateToProps = state => {
  return {
    pinList: state.pins.pinList,
    currentPos: state.pins.currentPos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPin: (currentPos) => dispatch(pinActions.addPin(currentPos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForageContainer)

  // this.props.pinList.map(pin => console.log(pin))
