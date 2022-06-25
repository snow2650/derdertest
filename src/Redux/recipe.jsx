import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL='https://localhost:3001/posts';
const Http = new XMLHttpRequest();
// JSON.stringify(data)

export const fetchRecipes = createAsyncThunk('posts/fetchRecipes', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

axios.get(POSTS_URL)
.then(res => {
    console.log("123");
    console.log(res.data);
})
.catch(err => {
    console.log(err.response);
})



//actions
export function addItem(recipe) {
    return {
        type: "ADD_ITEM",
        payload: recipe
    }
}

export function deleteItem(nameOfTheRecipe){
    return {
        type: "DELETE_ITEM", 
        payload: nameOfTheRecipe
    }
}

const initialState=[
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



export default function recipesReducer(recipes=initialState, action){   
    
    switch(action.type){
        case "ADD_ITEM": 
        {
            const updatedRecipes = [...recipes, action.payload] ;//action.payload is the new recipe append to the current recipe list

            //send req to server            
            //const url='https://localhost:3001/posts';
            // Http.open("POST", POSTS_URL, action.payload);  //send new post to 3001
            // Http.send();  //send request to url
            
            // Http.open("GET", POSTS_URL);  //get new post from 3001
            // updatedRecipes = Http.send();  //send request to url, the format is not righr
            //fetchRecipes;

            return updatedRecipes;
            
        }
        case "DELETE_ITEM":{
            const updatedRecipes = recipes.filter(item => action.payload !== item.id)


            //send req to server           
            //const url='https://localhost:3001/posts';
            // Http.open("DELETE", POSTS_URL, action.payload);  //send new post to 3001
            // Http.send();  //send request to url

            // Http.open("GET", POSTS_URL);  //get new post from 3001
            //updatedRecipes = Http.send();  //send request to url, the format is not righr


            return updatedRecipes;
        }
        default: 

            // Http.open("GET", POSTS_URL);  //get new post from 3001
            // updatedRecipes = Http.send();  //send request to url, the format is not right, should json.stringerfy to list
            return recipes; //don't use the initial data above
            //return updatedRecipes;


    }
    
}

export const selectAllPosts = (recipes) => recipes.posts.posts;