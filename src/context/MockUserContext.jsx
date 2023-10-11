import { createContext } from "react";
import { useUser } from "../features/auth/useUser";

export const MockUserContext = createContext();

export function MockUserContextProvider({ children }) {
  const user = useUser();
  return (
    <MockUserContext.Provider value={user}>{children}</MockUserContext.Provider>
  );
}
