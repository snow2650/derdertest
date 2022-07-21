import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const GET_URL = 'http://localhost:3001/read'; 
const ADD_URL = 'http://localhost:3001/insert';
const DELETE_URL = 'http://localhost:3001/delete';  
const EDIT_URL = 'http://localhost:3001/update'; 

export const fetchRecipes = createAsyncThunk('recipes/get', async() => {
    const response = await axios.get(GET_URL)  
    return response.data
})

export const addRecipe = createAsyncThunk('recipes/add', async (recipe) => {
    console.log("add _id = ")
    const response = await axios.post(ADD_URL, recipe)
    console.log(response);
    return response.data
})



export const deleteRecipe = createAsyncThunk('recipes/delete', async (_id) => {
    console.log("deleted _id = ", _id)
    const response = await axios.delete(DELETE_URL+`/${_id}`)
    return response.data
})

export const editRecipe = createAsyncThunk('recipes/update', async (updatedRecipe) => {
    // const updatedRecipe = {
    //     title: title,
    //     ingredients: [newIngredients],
    //     instructions: [instructions],
    //     time: time,
    //     id:currentID
    //   }
    const response = await axios.put(EDIT_URL, updatedRecipe)
    return response.data
})

const initialState =
[
    // {
    //     "_id": "init 1",
    //     "title": "Udon Soup",
    //     "ingredients": [
    //         "5 cups water",
    //         "5 teaspoons instant dashi granules",
    //         "2 tablespoons dark soy sauce",
    //         "1 pound dried udon noodles",
    //         "1/4 cup green onions, thinly sliced"
    //     ],
    //     "instructions": [
    //         "Cook udon noodles according to the instructions on the packaging.",
    //         "Bring a large pot of water to a boil.",
    //         "Add in dashi granules to the water.",
    //         "Divide noodles and garnish with green onions and seven-spice."
    //     ],
    //     "id": 1,
    //     "_v": 0
    // },
    // {   
    //     "_id": "init 2",
    //     "title": "Teriyaki Chicken",
    //     "ingredients":[
    //         "4 chicken thighs", 
    //         "1 tablespoon sesame or vegetable oil",
    //         "1/3 cup soy sauce",
    //         "1/3 cup sake"
    //     ],
    //     "instructions":[
    //         "Remove excess fat from chicken thighs",
    //         "Cook for 5-7 minutes or until chicken has browned.",
    //         "Empty the contents of the masala packet in the boiling water",
    //         "Pour the teriyaki sauce into the pan and bring to a boil over medium-high heat.", 
    //         "Serve over rice or noodles."
    //     ],
    //     "id": 2,
    //     "_v": 0
    // }
]

export default function recipesReducer(recipes = initialState, action) {   
    switch(action.type) {
        case "recipes/get/fulfilled": 
        case "recipes/add/fulfilled":
        case "recipes/delete/fulfilled":
        case "recipes/update/fulfilled":
            return action.payload;
        default: 
            return recipes;         
    }
}
export const selectAllPosts = (recipes) => recipes.posts.posts;