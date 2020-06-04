import { ADD_TO_WishList, REMOVE_FROM_WishList} from "../action/types";

export default function (state = {}, action) {
  console.log(action,'action')
  switch (action.type) {
      case ADD_TO_WishList:
        return { ...state, list: action.payload.WishListItem };
      case REMOVE_FROM_WishList:
        return { ...state, list: action.payload.WishListItem };
    default:
      return state;
  }
}
//items -> list