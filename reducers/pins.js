const DEFAULTSTATE = {
  newPin: {},
  pinList: []
}

const pins = (state = DEFAULTSTATE, action) => {
  switch (action.type) {
    case 'EDIT_PIN':
      return editPin(state, action)
    case 'ADD_PIN':
      return addPin(state, action)
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

const addPin = (state, action) => {
  const pinList = [
    ...state.pinList,
    action.pin
  ]

  return {
    ...state,
    pinList
  }
}

export default pins
