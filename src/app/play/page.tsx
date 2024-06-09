"use client";

import FlyImage from "@/assets/fly.png";
import HarambeImage from "@/assets/harambe.png";
import PepeImage from "@/assets/pepe.png";
import GameInfo from "@/components/features/GameInfo";
import Guide from "@/components/features/Guide";
import { FaArrowRight } from "react-icons/fa6";

import Navbar from "@/components/features/Navbar";
import PlayfulButton from "@/components/ui/PlayfulButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type GameStatusState =
  | "WAITING_FOR_OTHERS"
  | "SELECTING"
  | "GAME_ONGOING"
  | "DONE";

export default function Play() {
  const router = useRouter();

  /**
   * Available statuses:
   * WAITING_FOR_OTHERS | SELECTING | GAME_ONGOING | DONE
   */
  const [gameStatus, setGameStatus] =
    useState<GameStatusState>("WAITING_FOR_OTHERS");

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
      prevOptions.map((option) => {
        return { ...option, isSelected: option.id === id };
      })
    );
  };

  const handleSelectedCharacter = () => {
    setGameStatus("GAME_ONGOING");
  };

  return (
    <main>
      <Navbar />
      <GameInfo />

      {gameStatus === "GAME_ONGOING" ? (
        <div className="flex items-center flex-col p-24">
          <div>
            <h2 className="dark:text-neutral-200 text-center text-3xl font-mono font-bold">
              You lose
            </h2>
            <p className="dark:text-neutral-400 mb-2 text-center">
              Hector kills Harambe
            </p>
            <PlayfulButton
              onClick={() => setGameStatus("SELECTING")}
              endIcon={<FaArrowRight />}
            >
              Next round
            </PlayfulButton>
          </div>
          <div className="flex items-center mt-6 gap-[10rem]">
            <Image src={HarambeImage} alt="Harambe" width={300} />
            <Image src={FlyImage} alt="Harambe" width={100} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-24">
          <h4 className="text-3xl dark:text-neutral-200 font-bold font-mono">
            Choose:
          </h4>
          <div className="flex items-center gap-3 mt-7">
            {options.map((option) => (
              <div className="flex flex-col">
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
                      <PlayfulButton onClick={handleSelectedCharacter}>
                        Fuck yeah!
                      </PlayfulButton>
                    </div>
                  )}
                  <p className="font-mono dark:text-neutral-200">
                    {option.name}
                  </p>
                  <Image
                    src={option.image}
                    alt={option.name}
                    width={option.width}
                    className="m-auto"
                  />
                </div>
                <p className="text-center mt-2 dark:text-neutral-300 font-mono">
                  0/10 10% winrate
                </p>
              </div>
            ))}
          </div>
          <Guide />
        </div>
      )}
    </main>
  );
}
