import { createContext, useReducer } from "react";
import LoginForm from "../features/auth/LoginForm";
import SignUpForm from "../features/auth/SignUpForm";
import AddressForm from "../features/orders/AddressForm";

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

    default:
      throw new Error("Unknown action");
  }
}

export function ModalContextProvider({ children }) {
  const [formModal, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{ formModal, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}
