import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  LOADING,
  REMOVE,
  DISPLAY_ITEMS,
} from "./action";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppProvider.Provider value={{ ...state }}>{children}</AppProvider.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
