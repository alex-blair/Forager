const editPin = (newPin = {}) => {
  return {
    type: 'EDIT_PIN',
    pin: newPin
  }
}

export {
  editPin
}
