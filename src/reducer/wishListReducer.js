import { ADD_TO_WishList, REMOVE_FROM_WishList} from "../action/types";

export default function (state = {}, action) {
  switch (action.type) {
      case ADD_TO_WishList:
        return { ...state, items: action.payload.WishListItem };
      case REMOVE_FROM_WishList:
        return { ...state, items: action.payload.WishListItem };
    default:
      return state;
  }
}