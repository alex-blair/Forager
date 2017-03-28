import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as pinActions from '../actions/pins/'

import ForageScreen from '../components/ForageScreen'

class ForageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <ForageScreen pins={this.props.pins} addPin={this.props.addPin}/>
  }
}

const mapStateToProps = state => {
  return {
    pins: state.pins.pinList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPin: (pin) => dispatch(pinActions.addPin(pin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForageContainer)
