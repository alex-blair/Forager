import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions/pins/'
import EditResourceType from '../components/pinWizard/EditResourceType'
import EditLocation from '../components/pinWizard/EditLocation'
import EditNotes from '../components/pinWizard/EditNotes'

class EditPin extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.overridePin()
  }

  editResourceType (resourceType) {
    console.log(resourceType)
    this.props.overridePin({
      ...this.props.pin,
      resourceType
    })
  }

  render () {
    const { pin } = this.props

    return (
      <View>
        {getWizardStep(pin, this.editResourceType.bind(this))}
      </View>
    )
  }
}

const getWizardStep = (pin, saveResourceType) => {
  if (!pin.resourceType) {
    return <EditResourceType saveResourceType={saveResourceType} pin={pin} />
  }

  if (!pin.location) {
    return <EditLocation pin={pin} />
  }

  if (!pin.notes) {
    return <EditNotes pin={pin} />
  }

  return <Text>Thanks!</Text>
}

const mapDispatchToProps = dispatch => {
  return {
    overridePin: (pin) => {
      dispatch(actions.editPin(pin))
    }
  }
}

const mapStateToProps = state => {
  return {
    pin: state.pins.newPin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPin)
