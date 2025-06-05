import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  LOADING,
  REMOVE,
  DISPLAY_ITEMS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  throw new Error(`no matching action type: ${action.type}`);
  return state;
};

export default reducer;
