import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext was use outside ModalContextProvider");
  return context;
}
