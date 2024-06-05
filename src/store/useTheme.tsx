import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext(
  // @ts-ignore
  null
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [highlight, setHighlight] = useState("bg-red-900");

  // VALUE context prop
  const value: any = {
    highlight,
    setHighlight,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within shopcontext");
  }
  return context;
};

export default useTheme;