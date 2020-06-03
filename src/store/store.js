import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducer";

const cartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const initialState = { cart: { items: cartItem } };
// const initialState={};
// if(localStorage.getItem('cartItem')){
//   initialState.cart = {items: JSON.parse(localStorage.getItem('cartItem'))}
// }



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;