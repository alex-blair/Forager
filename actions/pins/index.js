const editPin = (newPin = {}) => {
  return {
    type: 'EDIT_PIN',
    pin: newPin
  }
}

const addPin = (pin) => {
  return {
    type: 'ADD_PIN',
    pin
  }
}

export {
  editPin,
  addPin
}
