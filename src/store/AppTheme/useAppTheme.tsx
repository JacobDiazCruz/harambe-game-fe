import { useContext } from "react";
import { AppThemeContext } from "./appThemeContext";

export default function useAppTheme() {
  const context = useContext(AppThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within `AppThemeContext`");
  }
  return context;
}