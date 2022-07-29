import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { fetchRecipes,addRecipe,deleteRecipe, editRecipe} from "../Redux/recipe";
import Input from "./Input";
import HiddenPage from "./HiddenPage";
import logo from './seal.jpg';
import React from "react";
import axios from "axios";

var currentID = 2;
const InputForm = () => {
  const recipes = useSelector(state => state);
  const dispatch = useDispatch();
  const [title ,setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [time, setTime] = useState(10);
  const [newIngredients,setNewIn] =useState('');

  const openPopup = (e, id) => {
    setIsOpen(!isOpen);
    console.log(id);
    setId(id);
  }

  const handleSubmit =(e) => {
    e.preventDefault();  //call axios
    dispatch(fetchRecipes());  //call fetch here!!
    currentID++; 
    const newRecipe = {
      title: title,
      ingredients: [ingredients],
      instructions: [instructions],
      time: time,
      id:currentID
    }
    dispatch(addRecipe(newRecipe));
  }

  const handleDelete = (_id) => {
    dispatch(deleteRecipe(_id));
  }

  const handleReset = () => {
    setTitle('');
    setIngredients('');
    setInstructions('');
    setTime('')
  }

  const handleEdit = (_id) => {
    //e.preventDefault();  //call axios
    //dispatch(editRecipe());  //call edit here!!
    
    const updatedRecipe = {
      newIngredients: [newIngredients],
      id: _id  
    }
    dispatch(editRecipe(updatedRecipe));
  }

  return (
    <div className="flex">
      <div className="flex flex-col items-center">   
        <img alt="seal" src={logo} className="md:w-[50%] w-[35%] mr-[10vw]"/> 
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
            Completion Time in minutes: 
            <Input value={["Completion Time", time, setTime]} />

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
                  <div className="font-normal">Completion Time</div>
                  <ul className="list-disc p-4"> {
                    element.time} 
                  </ul>
                </div>
                <button onClick={() => handleDelete(element._id)} className="font-bold text-xl"> DELETE </button>
                <div>
                
                <Input 
                type="text" 
                value={["New Ingredients", newIngredients, setNewIn]}></Input>
                
                <button onClick={() => handleEdit(element._id)}> Edit Ingredients </button>
                </div>
              </div>
            );})}
        </div>
      </div>
    );
}

export default InputForm;