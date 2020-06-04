import { ADD_TO_CART, REMOVE_FROM_CART} from "./types";

export const addToCart = (items, product) => (dispatch) => {
  console.log(items,'items')
  const cartItem = items.slice();
  let productAlreadyInCart = false;

  cartItem.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItem.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  dispatch({ type: ADD_TO_CART, payload: { cartItem } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItem = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItem } });
};




