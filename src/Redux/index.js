import {configureStore} from "@reduxjs/toolkit";
import recipesReducer from "./recipe";

const store = configureStore({
    reducer: recipesReducer,
    devTools: true
});
store.subscribe(() => console.log(store.getState()));
export default store