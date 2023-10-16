import { createContext, useReducer, useState } from "react";
import LoginForm from "../features/auth/LoginForm";
import SignUpForm from "../features/auth/SignUpForm";
import AddressForm from "../features/orders/AddressForm";
import PayForm from "../features/orders/PayForm";

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
