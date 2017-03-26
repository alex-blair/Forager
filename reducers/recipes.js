import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({
  name: 'potato pie'
}, {

})

export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state,action) {
    return state + 1
  }
})
