"use client";

import { createContext, ReactNode, useState } from "react";

export const AppThemeContext = createContext<ContextValue>(
  // @ts-ignore
  null
);

interface ContextValue {
  darkTheme: boolean;
  handleToggleDarkTheme: () => void;
}

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const value: ContextValue = {
    darkTheme,
    handleToggleDarkTheme,
  };

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};