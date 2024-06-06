"use client";

import FlyImage from "@/assets/fly.png";
import HarambeImage from "@/assets/harambe.png";
import PepeImage from "@/assets/pepe.png";
import GameInfo from "@/components/features/GameInfo";
import Guide from "@/components/features/Guide";

import Navbar from "@/components/features/Navbar";
import PlayfulButton from "@/components/ui/PlayfulButton";
import Image from "next/image";
import { useState } from "react";

export default function Play() {
  /**
   * Available statuses:
   * WAITING_FOR_OTHERS | SELECTING | DONE
   */
  const [gameStatus, setGameStatus] = useState("WAITING_FOR_OTHERS");

  const [options, setOptions] = useState([
    {
      id: "5112412",
      image: HarambeImage,
      name: "Harambe",
      isSelected: false,
      width: 200,
    },
    {
      id: "25536",
      image: PepeImage,
      name: "Pepe",
      isSelected: false,
      width: 120,
    },
    {
      id: "23512414",
      image: FlyImage,
      name: "Hector",
      isSelected: false,
      width: 90,
    },
  ]);

  const handleOptionClick = (id: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, isSelected: true }
          : { ...option, isSelected: false }
      )
    );
  };

  return (
    <main>
      <Navbar />
      <GameInfo />

      <div
        className={`flex flex-col items-center p-24 dark:bg-[#0f1214] bg-white`}
      >
        <h4 className="text-3xl dark:text-neutral-200 font-bold font-mono">
          Choose:
        </h4>
        <div className="flex items-center gap-3 mt-7">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="border rounded-md border-neutral-100 cursor-pointer w-[250px] h-[250px] flex items-center flex-col border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            >
              {option.isSelected && (
                <div className="absolute bg-black/80 h-full -mt-4 text-center px-2 flex flex-col items-center justify-center">
                  <p className="text-neutral-200 mb-2 font-medium font-mono">
                    Are you sure to select {option.name}?
                  </p>
                  <PlayfulButton>Fuck yeah!</PlayfulButton>
                </div>
              )}
              <p className="font-mono dark:text-neutral-200">{option.name}</p>
              <Image
                src={option.image}
                alt={option.name}
                width={option.width}
                className="m-auto"
              />
            </div>
          ))}
        </div>
        <Guide />
      </div>
    </main>
  );
}
