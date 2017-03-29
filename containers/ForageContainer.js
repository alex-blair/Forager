import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as pinActions from '../actions/pins/'

import ForageScreen from '../components/ForageScreen'

class ForageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.currentPos)
    return <ForageScreen pins={this.props.pins} addPin={this.props.addPin} currentPos={this.props.currentPos}/>
  }
}

const mapStateToProps = state => {
  return {
    pins: state.pins.pinList,
    currentPos: state.pins.currentPos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPin: (pin) => dispatch(pinActions.addPin(pin)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ForageContainer)
