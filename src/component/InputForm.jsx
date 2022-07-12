import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { deleteRecipe, addRecipe, getRecipe } from "../Redux/recipe";
import Input from "./Input";
import HiddenPage from "./HiddenPage";
import logo from './seal.jpg';
import React from "react";
import axios from "axios"
import {createAsyncThunk} from '@reduxjs/toolkit';
//import run from "./run";

const POSTS_URL = 'http://localhost:3001/users';    //??
//const POSTS_URL = 'http://localhost:27017/seal.recipes';

 //const { MongoClient } = require("mongodb");
// let uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2vat0.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

export const fetchRecipes = createAsyncThunk('posts/fetchRecipes', async () => {
    const response = await axios.get(POSTS_URL)    
    return response.data

    //return run();
    
})




var currentID = 2;
const InputForm = () => {
  const recipes = useSelector(state => state);
  const dispatch = useDispatch();
  const [title ,setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const openPopup = (e, id) => {
    setIsOpen(!isOpen);
    console.log(id);
    setId(id);
  }

  //dispatch(fetchRecipes());

  const handleSubmit =(e) => {
    e.preventDefault();  //call axios
    dispatch(fetchRecipes());  //call fetch here!!
    currentID++; 
    const newRecipe = {
      title: title,
      ingredients: [ingredients],
      instructions: [instructions],
      id:currentID
    }
    dispatch(addRecipe(newRecipe));
    //dispatch(fetchRecipes());
  }

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  }

  const handleReset = () => {
    setTitle('')
    setIngredients('');
    setInstructions('');
  }

  return (
    <div className="flex">
      <div className="flex flex-col items-center">   
        <img alt="seal" src={logo} className="md:w-[50%] w-[35%] mr-[10vw]"/> 
      </div>        
      <div className="flex flex-col items-center">        
        <span className="font-semibold">Little Seal's Recipe</span>
      </div>
      <div className="flex justify-center items-left">
        <form className="lg:w-[50%] w-[35%]" onSubmit={handleSubmit}>
            Recipe Title :          
            <Input value={["Title", title, setTitle]} />        
            Ingredients :          
            <Input value={["Ingredients", ingredients, setIngredients]} />        
            Instructions :          
            <Input value={["Instructions", instructions, setInstructions]} /> 
            <div className="flex justify-between">
              <button type="reset" onClick={handleReset} >
                Clear
              </button>
              <button type="submit">
                Submit
              </button>
            </div>   
          </form>
        </div>   

        {isOpen && <HiddenPage value={id} handleClose={openPopup} />}

        <div className="rounded-[40px] w-[90%] h-[300px] border-2 m-10 p-5 border-black flex flex-wrap flex-row overflow-x-scroll">
          {recipes.map((element) => {
            return (
              <div className="flex flex-row justify-items-start items-start">
                <div className="h-[250px] w-[250px] sm:w-[90%] md:w-[50%] border-2 p-4 m-2 rounded-[40px] drop-shadow-md snap-center overflow-auto"
                    onClick={(e) => {openPopup(e, element.id)}}>
                  <div className="flex flex-row justify-between">
                    <div className="font-bold text-xl mb-2">{element.title} </div>
                  </div> 
                  <div className="font-normal">Ingredients </div>
                  <ul className="list-disc p-4"> {
                    element.ingredients.map (ingredientItem => 
                    <li className="text-gray-700 text-base">
                    {ingredientItem} </li>)}
                  </ul>
                  <div className="font-normal">Instructions</div>
                  <ul className="list-disc p-4"> {
                    element.instructions.map(instructionItem =>
                    <li className="text-gray-700 text-base">
                    {instructionItem} </li>)} 
                  </ul>
                </div>
                <button onClick={() => handleDelete(element.id)} className="font-bold text-xl">DELETE </button>
              </div>
            );})}
        </div>
      </div>
    );
}

export default InputForm;