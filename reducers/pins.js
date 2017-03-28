const DEFAULTSTATE = {
  newPin: {}
}

const pins = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'EDIT_PIN':
      return editPin(state, action)
    default:
      return state
  }
}

const editPin = (state, action) => {
  return {
    ...state,
    newPin: action.pin
  }
}

export default pins
