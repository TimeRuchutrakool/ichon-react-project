import { createContext, useReducer, useState } from "react";
import LoginForm from "../features/auth/LoginForm";
import SignUpForm from "../features/auth/SignUpForm";
import AddressForm from "../features/orders/AddressForm";
import PayForm from "../features/orders/PayForm";
import AddNewProductForm from "../features/admin/AddNewProductForm";
import EditProductForm from "../features/admin/EditProductForm";
import SlipImage from "../features/admin/SlipImage";
import OrderedProductList from "../features/admin/OrderedProductList";

export const ModalContext = createContext();

const initialState = {
  form: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case "close":
      return { ...state, form: undefined };
    case "login":
      return { ...state, form: <LoginForm /> };
    case "signup":
      return { ...state, form: <SignUpForm /> };
    case "address":
      return { ...state, form: <AddressForm /> };
    case "pay":
      return { ...state, form: <PayForm /> };
    case "addProduct":
      return { ...state, form: <AddNewProductForm /> };
    case "editProduct":
      return { ...state, form: <EditProductForm product={action.payload} /> };
    case "slipPreview":
      return { ...state, form: <SlipImage src={action.payload} /> };
    case "seeOrderedProductd":
      return { ...state, form: <OrderedProductList /> };

    default:
      throw new Error("Unknown action");
  }
}

export function ModalContextProvider({ children }) {
  const [isPaying, setIsPaying] = useState(false);
  const [formModal, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider
      value={{ formModal, dispatch, setIsPaying, isPaying }}
    >
      {children}
    </ModalContext.Provider>
  );
}
