import { createContext, useState } from "react";

export const SortContext = createContext()

export function SortContextProvider({ children }) {
    const [sortIndex, setSortIndex] = useState(0)
    return (
      <SortContext.Provider value={{ sortIndex, setSortIndex }}>
        {children}
      </SortContext.Provider>
    );
  }
  