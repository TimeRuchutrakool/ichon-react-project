import { useContext } from "react";
import { MockUserContext } from "../context/MockUserContext";

export default function useMockUser() {
  const context = useContext(MockUserContext);
  if (context === undefined)
    throw new Error("MockUserContext was use outside MockUserContextProvider");
  return context;
}
