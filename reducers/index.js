import { combineReducers } from 'redux'

import resources from './resources'

export default combineReducers({
  resources
})


//We're creating a mechanism for adding different reducers and actions from around the application

//You might want to manage different portions of state. Each portion of state would be managed by a reducer.

//e.g. one reducer for searched recipes, another for starred recipes. Taking different bits of state data and storing them in different reducers. You're transforming your data and putting it in different portions of your state.

//You might have the same object in different reducers but representing different aspects of your state.
