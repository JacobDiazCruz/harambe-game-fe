"use client"
import Image from "next/image";

import HarambeImage from "../assets/harambe.png"
import PepeImage from "../assets/pepe.png"
import FlyImage from "../assets/fly.png"
import Banner from "../assets/banner.png"

import Button from "@/components/ui/Button";
import { AiTwotoneTrophy } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Features/Navbar";

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <Navbar />

      <div className="flex min-h-screen flex-col items-center p-24">
        <div className="text-lg">
          🦍🐸🦟
        </div>
        <h4 className="text-3xl font-light text-neutral-100 font-mono">JUST LIKE ROCK PAPER SCISSORS</h4>
        <button onClick={() => router.push("/play")} className="px-6 py-3 bg-[#171717] dark:bg-[#FCBA28] text-neutral-200 dark:text-neutral-800 font-semibold mt-6 border border-[#231F20] rounded-md">
          Select Wallet
        </button>
        <Image 
          src={Banner}
          alt="Harambe"
          className="m-auto"
          width={700}
        />
      </div>  
    </main>
  );
}
