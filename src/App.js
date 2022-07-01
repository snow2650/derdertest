import { useEffect } from 'react';
import './App.css';
import InputForm, { fetchRecipes } from './component/InputForm';

import logo from './component/seal.jpg';
import store from './Redux';


function App() {
  useEffect(()=> {
    store.dispatch(fetchRecipes());
  },[]);
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
