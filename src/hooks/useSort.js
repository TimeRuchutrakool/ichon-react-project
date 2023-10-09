import { useContext } from "react";
import { SortContext } from "../context/SortContext";

export function useSort() {
  const context = useContext(SortContext);
  if (context === undefined)
    throw new Error("SortContext was used outside of SortContextProvider");
  return context;
}
