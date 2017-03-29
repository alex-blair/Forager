import { Location } from 'expo'

export const editPin = (newPin = {}) => {
  return {
    type: 'EDIT_PIN',
    pin: newPin
  }
}

export const addPin = (pin) => {
  return {
    type: 'ADD_PIN',
    pin
  }
}

export const updateCurrentPosition = (location) => {
  return {
    type: 'UPDATE_CURRENT_POSITION',
    location: {...location, latitudeDelta: 0.05, longitudeDelta: 0.04}
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
