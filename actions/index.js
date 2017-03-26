import * as RecipeActions from './recipes'
//RecipeActions are functions to do with recipes e.g. searchRecipes, saveRecipes etc, which are described in the recipes.js file. By using this syntax we're importing them as an object, merging them with an other functions we might have in our app, and then returning that as actionCreators. We're grouping up all of the potential actions that our app could perform into this applications constant. Useful as you app grows. These will be all the different actions that our app will need to respond to and it's helpful to have a manifest folder to describe them all.

export const ActionCreators = Object.assign({},
  RecipeActions
)
