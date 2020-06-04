import { ADD_TO_WishList, REMOVE_FROM_WishList,} from "./types";

export const addToWishList = (list, product) => (dispatch) => {
  console.log(list, product,'widhhh')
    const WishListItem = list.slice();
    let productAlreadyInWishList = false;
  
    WishListItem.forEach((cp) => {
      if (cp.id === product.id) {
        cp.count += 1;
        productAlreadyInWishList = true;
      }
    });
  
    if (!productAlreadyInWishList) {
      WishListItem.push({ ...product, count: 1 });
    }
    localStorage.setItem("WishListItem", JSON.stringify(WishListItem));
    dispatch({ type: ADD_TO_WishList, payload: { WishListItem } });
  };
  
  export const removeFromWishList = (list, product) => (dispatch) => {
    const WishListItem = list.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("WishListItem", JSON.stringify(WishListItem));
    dispatch({ type: REMOVE_FROM_WishList, payload: { WishListItem } });
  };