const initialState = {
  newPin: {},
  pinList: [],
  currentPos: {}
}

const pins = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PIN':
      return editPin(state, action)
    case 'ADD_PIN':
      return addPin(state, action)
    case 'UPDATE_CURRENT_POSITION':
      return updateCurrentPosition(state, action)
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
    action.currentPos
  ]
  return {
    ...state,
    pinList
  }
}

const updateCurrentPosition = (state, action) => {
  return {
    ...state,
    currentPos: action.location
  }
}


export default pins
