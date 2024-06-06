"use client"

import { useAppTheme } from "@/store/AppTheme"
import { useEffect } from "react"

/**
 * This component is responsible for rendering all the global components on the platform.
 */
export default function GlobalPlatformComponents() {
  const { darkTheme } = useAppTheme()

  // Note: On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    const colorTheme = darkTheme ? "dark" : "light"

    const root = window.document.documentElement
    root.classList.remove(darkTheme ? "light" : "dark")
    root.classList.add(colorTheme)
    localStorage.setItem("theme", colorTheme)
  }, [darkTheme])

  return <></>
}
