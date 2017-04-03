import { Location } from 'expo'

export const editPin = (newPin = {}) => {
  return {
    type: 'EDIT_PIN',
    pin: newPin
  }
}

export const addPin = (currentPos) => {
  return {
    type: 'ADD_PIN',
    currentPos
  }
}

export const updateCurrentPosition = (location) => {
  return {
    type: 'UPDATE_CURRENT_POSITION',
    location: {...location, latitudeDelta: 0.004, longitudeDelta: 0.005}
  }
}

export function getCurrentPosition () {
  return (dispatch) => {
    Location.watchPositionAsync({enableHighAccuracy: true, distanceInterval: 10},
      (position) => {
        dispatch(updateCurrentPosition(position.coords))
      })
  }
}
