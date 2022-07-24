import { useEffect } from 'react';
import axios from "axios";
import './App.css';
import InputForm from './component/InputForm';
import { fetchRecipes } from './Redux/recipe';
import store from './Redux';

function App() {
  useEffect(()=> {
    store.dispatch(fetchRecipes())
  },[])
  return (     
    <div className="App">
      <header className="App-header">
       <a>
          <InputForm/> 
        </a>  
     </header>   
  </div>
  );
}

export default App;
