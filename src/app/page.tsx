"use client";

import Navbar from "@/components/features/Navbar";
import SelectWalletBtn from "@/components/features/SelectWalletBtn";
import Image from "next/image";
import Banner from "../assets/banner.png";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="dark:bg-[#0f1214] bg-white flex min-h-screen flex-col items-center p-24">
        <div className="text-lg">🦍🐸🦟</div>
        <p className="text-3xl font-light font-mono dark:text-neutral-200">
          HARAMBE V PEPE V HECTOR
        </p>
        <SelectWalletBtn />
        <Image src={Banner} alt="Harambe" className="m-auto" width={700} />
      </div>
    </main>
  );
}
