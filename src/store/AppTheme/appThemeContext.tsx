"use client"

import { createContext, ReactNode, useState } from "react"

export const AppThemeContext = createContext<ContextValue>(
  // @ts-ignore
  null
)

interface ContextValue {
  darkTheme: boolean
  handleToggleDarkTheme: () => void
}

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme")
  }
}
export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(
    getLocalStorage() === "dark" ? true : false
  )

  const handleToggleDarkTheme = () => {
    setDarkTheme((prev) => !prev)
  }

  const value: ContextValue = {
    darkTheme,
    handleToggleDarkTheme
  }

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  )
}
