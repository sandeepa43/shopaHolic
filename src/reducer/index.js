import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import WishListReducer from './WishListReducer';
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  WishList: WishListReducer,
});