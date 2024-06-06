"use client"

import Guide from "@/components/features/Guide"
import Navbar from "@/components/features/Navbar"
import PlayfulButton from "@/components/ui/PlayfulButton"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <Navbar />

      <div className="dark:bg-[#0f1214] bg-white flex min-h-screen flex-col items-center p-24">
        <div className="text-lg">🦍🐸🦟</div>
        <p className="text-3xl font-light mb-5 font-mono dark:text-neutral-200">
          HARAMBE VS CAYLE
        </p>
        <div className="flex gap-2">
          <PlayfulButton onClick={() => router.push("/play")}>
            PLAY NOW
          </PlayfulButton>
        </div>
        <Guide />
      </div>
    </main>
  )
}
