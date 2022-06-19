import redux,{createStore} from "redux";
import recipesReducer from "./recipe";



const store = createStore(recipesReducer);
store.subscribe(() => console.log(store.getState()));
export default store

