import React from "react";
import { useSelector } from "react-redux";

const HiddenPage = props => {
    const recipe =useSelector(state => state);

    console.log("recipe", recipe);

    const recipeAtHand = recipe.filter(obj => {
        return obj.id === props.value
      })[0]
      console.log("recipeAtHand", recipeAtHand);

      return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <div className="font-bold text-xl mb-2">{recipeAtHand.name}</div>
                <div className="font-normal">Ingredients</div>
                <ul className="list-disc p-4">
                {
                    recipeAtHand.ingredients.map(ingredientItem => <li 
                        className="text-gray-700 text-base">
                        {ingredientItem}
                    </li>)
                }
                </ul>
                <div className="font-normal">Instructions</div>
                <ul className="list-disc p-4">
                {
                    recipeAtHand.instructions.map(instructionItem => <li 
                        className="text-gray-700 text-base">
                        {instructionItem}
                    </li>)
                }
                </ul>
          </div>
        </div>
      );

}




export default HiddenPage;