import GlobalPlatformComponents from "@/components/features/GlobalPlatformComponents"
import AppContextProvider from "@/store"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sol game",
  description: ""
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#0f1214]`}>
        <AppContextProvider>
          <GlobalPlatformComponents />
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
