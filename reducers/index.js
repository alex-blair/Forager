import { combineReducers } from 'redux'
import * as recipesReducer from './recipes'

export default combineReducers(Object.assign(
  recipesReducer,
));

//We're creating a mechanism for adding different reducers and actions from around the application

//You might want to manage different portions of state. Each portion of state would be managed by a reducer.

//e.g. one reducer for searched recipes, another for starred recipes. Taking different bits of state data and storing them in different reducers. You're transforming your data and putting it in differnet portions of your state.
