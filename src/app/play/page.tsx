"use client";

import FlyImage from "@/assets/fly.png";
import GuideImage from "@/assets/guide.png";
import HarambeImage from "@/assets/harambe.png";
import PepeImage from "@/assets/pepe.png";
import GameInfo from "@/components/features/GameInfo";

import Navbar from "@/components/features/Navbar";
import Button from "@/components/ui/Button";
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

      {/* <div className="flex dark:bg-[#0f1214] bg-white min-h-screen">
        <div
          id="guide-nav"
          className="border-r p-6 dark:border-neutral-800 border-neutral-300"
        >
          <h4 className="text-2xl font-bold text-neutral-700 dark:text-neutral-100 font-mono mb-5">
            Guide:
          </h4>
          <p className="font-mono text-neutral-700">- Harambe kills Pepe</p>
          <p className="font-mono text-neutral-700">- Pepe kills Hector</p>
          <p className="font-mono text-neutral-700">- Hector kills Harambe</p>
          <Image
            src={GuideImage}
            alt="Guide"
            width={200}
            className="m-auto mt-10"
          />
        </div>
      </div> */}

      <div className={`flex flex-col items-center p-24`}>
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
                  <p className="mb-2 text-neutral-200 font-medium font-mono">
                    Are you sure to select {option.name}?
                  </p>
                  <Button>Fuck yeah!</Button>
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
        {/* <>
          <h1 className="font-bold font-mono text-4xl">You Win!</h1>
          <h1 className="font-medium font-mono text-xl text-neutral-700">
            Harambe beats Pepe!
          </h1>

          <div className="flex justify-between w-[700px] mt-10">
            <Image
              src={options[0].image}
              width={options[0].width}
              alt="Test"
              className="m-auto"
            />
            <Image
              src={options[1].image}
              width={options[1].width}
              alt="Test"
              className="m-auto"
            />
          </div>
        </> */}

        <hr />

        <div id="guide-nav" className="mt-[100px]">
          <h4 className="text-2xl font-bold text-neutral-700 text-center dark:text-neutral-100 font-mono mb-5">
            Guide:
          </h4>
          <p className="font-mono text-neutral-700">- Harambe kills Pepe</p>
          <p className="font-mono text-neutral-700">- Pepe kills Hector</p>
          <p className="font-mono text-neutral-700">- Hector kills Harambe</p>
          <Image
            src={GuideImage}
            alt="Guide"
            width={200}
            className="m-auto mt-10"
          />
        </div>
      </div>
    </main>
  );
}
