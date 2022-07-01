import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const HOST_URL = 'http://localhost:3001/users';

/*    ????
export const fetchRecipes = createAsyncThunk('recipes/get', async () => {
    const response = await axios.get(HOST_URL)
    console.log("recipes/fetchRecipes = ")
    console.log(response.data)
    return response.data
})
*/

export const addRecipe = createAsyncThunk('recipes/add', async (recipe) => {
    const response = await axios.post(HOST_URL, recipe)
    return response.data
})

export const deleteRecipe = createAsyncThunk('recipes/delete', async (id) => {
    console.log("deleted id = ", id)
    const response = await axios.delete(HOST_URL, {data: id})
    return response.data
})

const initialState =
[
    {
        "title": "Udon Soup",
        "ingredients": [
            "5 cups water",
            "5 teaspoons instant dashi granules",
            "2 tablespoons dark soy sauce",
            "1 pound dried udon noodles",
            "1/4 cup green onions, thinly sliced"
        ],
        "instructions": [
            "Cook udon noodles according to the instructions on the packaging.",
            "Bring a large pot of water to a boil.",
            "Add in dashi granules to the water.",
            "Divide noodles and garnish with green onions and seven-spice."
        ],
        "id": 1
    },
    {
        "title": "Teriyaki Chicken",
        "ingredients":[
            "4 chicken thighs", 
            "1 tablespoon sesame or vegetable oil",
            "1/3 cup soy sauce",
            "1/3 cup sake"
        ],
        "instructions":[
            "Remove excess fat from chicken thighs",
            "Cook for 5-7 minutes or until chicken has browned.",
            "Empty the contents of the masala packet in the boiling water",
            "Pour the teriyaki sauce into the pan and bring to a boil over medium-high heat.", 
            "Serve over rice or noodles."
        ],
        "id": 2
    }
]

export default function recipesReducer(recipes = initialState, action) {   
    switch(action.type) {
        case "posts/fetchRecipes/fulfilled":    
        case "recipes/add/fulfilled":
        case "recipes/delete/fulfilled":
            return action.payload;
        default: 
            return recipes; //don't use the initial data above         
    }
}
export const selectAllPosts = (recipes) => recipes.posts.posts;