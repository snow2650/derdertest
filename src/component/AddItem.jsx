import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";

import { addItem } from "../Redux/recipe";


const AddItem = () => {
    const dispatch = useDispatch();
    let recipe = useSelector(state => state);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [time, setTime] = useState(10);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("title", title);
        // console.log("ingredients", ingredients);
        // console.log("instructions", instructions);
        const ingredientsList = ingredients;
        const instructionsList = instructions;
        const time = time;
        const newRecipe = {
            title: title, 
            ingredients: ingredientsList,
            instructions: instructionsList,
            time: time
        }
        dispatch(addItem(newRecipe));
        const json = JSON.stringify(Object.fromEntries(newRecipe))
        console.log(json)

        // const response = await fetch('/api/data', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ post: this.state.post }),
        //   });
        //   const body = await response.text();
          
        //   this.setState({ responseToPost: body });
        
    }
    

    return (
        <div className="flex flex-col">
            
            <div className="flex justify-center items-center p-5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[35%]" onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="title" 
                            type="text" 
                            placeholder="Title" 
                            value={title}
                            onChange={(e) => {setTitle(e.target.value)}} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                            Ingredients
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="ingredients" 
                            type="text" 
                            placeholder="Ingredients" 
                            value={ingredients} 
                            onChange={(e)=> {setIngredients(e.target.value)}}/>
                    </div>  
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
                            Instructions
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="Instructions" 
                        value={instructions}
                        onChange={(e)=> {setInstructions(e.target.value)}} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
                            Completion Time in minutes
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="10" 
                        value={instructions}
                        onChange={(e)=> {setTime(e.target.value)}} />
                    </div>     
                    {/* <!-- <button type="submit"><a href="index.html">Submit</a></button> --> */}
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    {/* <!-- onclick="location.href='index.html'" --> */}
                </form>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default AddItem;