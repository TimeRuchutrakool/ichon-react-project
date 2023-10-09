import { createContext, useState } from "react";

export const SortContext = createContext();

export function SortContextProvider({ children }) {
  const [selected, setSelected] = useState(0);

  return (
    <SortContext.Provider value={{ selected, setSelected }}>
      {children}
    </SortContext.Provider>
  );
}
