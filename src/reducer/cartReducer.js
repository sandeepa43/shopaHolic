import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/types";

export default function (state = {}, action) {
  console.log(action,'action')
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItem };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItem };
      
    default:
      return state;
  }
}