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
import { useState } from "react";

type GameStatusState =
  | "WAITING_FOR_OTHERS"
  | "SELECTING"
  | "GAME_ONGOING"
  | "DONE";

interface Character {
  id: string;
  image: any;
  name: string;
  isSelected: boolean;
  width: number;
}

export default function Play() {
  /**
   * Available statuses:
   * WAITING_FOR_OTHERS | SELECTING | GAME_ONGOING | DONE
   */
  const [gameStatus, setGameStatus] =
    useState<GameStatusState>("WAITING_FOR_OTHERS");

  const [characters, setCharacters] = useState<Character[]>([
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
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleOptionClick = (id: string) => {
    setCharacters((prev) =>
      prev.map((option) => {
        return { ...option, isSelected: option.id === id };
      })
    );
  };

  const handleSelectedCharacter = (data: any) => {
    setSelectedCharacter(data);
    setGameStatus("GAME_ONGOING");
  };

  const handleClickNextRound = () => {
    setCharacters((prev) =>
      prev.map((character) => {
        return { ...character, isSelected: false };
      })
    );
    setGameStatus("SELECTING");
  };

  const calculateCharWidth = (character: Character) => {
    switch (character.name) {
      case "Harambe":
        return 300;
      case "Pepe":
        return 190;
      case "Hector":
        return 100;
      default:
        return 0;
    }
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
              onClick={handleClickNextRound}
              endIcon={<FaArrowRight />}
            >
              Next round
            </PlayfulButton>
          </div>
          <div className="flex items-center mt-6 gap-[10rem]">
            <Image
              src={selectedCharacter?.image}
              alt="Harambe"
              width={calculateCharWidth(selectedCharacter as Character)}
            />
            <Image src={FlyImage} alt="Harambe" width={100} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-24">
          <h4 className="text-3xl dark:text-neutral-200 font-bold font-mono">
            Choose:
          </h4>
          <div className="flex items-center gap-3 mt-7">
            {characters.map((character) => (
              <div className="flex flex-col">
                <div
                  key={character.id}
                  onClick={() => handleOptionClick(character.id)}
                  className="border rounded-md border-neutral-100 cursor-pointer w-[250px] h-[250px] flex items-center flex-col border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                >
                  {character.isSelected && (
                    <div className="absolute bg-black/80 h-full -mt-4 text-center px-2 flex flex-col items-center justify-center">
                      <p className="text-neutral-200 mb-2 font-medium font-mono">
                        Are you sure to select {character.name}?
                      </p>
                      <PlayfulButton
                        onClick={() => handleSelectedCharacter(character)}
                      >
                        Fuck yeah!
                      </PlayfulButton>
                    </div>
                  )}
                  <p className="font-mono dark:text-neutral-200">
                    {character.name}
                  </p>
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={character.width}
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
