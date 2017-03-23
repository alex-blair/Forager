const getResourcesFromApi = () => {
  return fetch('https://forager-server.herokuapp.com/resources')
    .then((response) => response.json())
    .then((responseJSON) => {
      return responseJson.resources
    })
    .catch((error) => {
      console.error(error)
    })
}

export default getResourcesFromApi
