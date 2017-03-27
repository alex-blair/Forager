const resources = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESOURCES':
      return [...state, action.resource]

      default:
        return state
  }
}

export default resources
