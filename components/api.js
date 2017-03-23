const getResourcesFromApi = () => {
  return fetch('https://forager-server.herokuapp.com/resources')
    .then((response) => response.json())
    .then((responseJSON) => responseJSON.resources)
}

export { getResourcesFromApi }
