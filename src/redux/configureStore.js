import { combineReducers, createStore } from "redux";
import productsReducer from "./Ducks/products";

const reducer = combineReducers({ products: productsReducer });

const store = createStore(reducer);

export default store;
