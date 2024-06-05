"use client"
import Image from "next/image";

import HarambeImage from "@/assets/harambe.png"
import PepeImage from "@/assets/pepe.png"
import FlyImage from "@/assets/fly.png"
import CatImage from "@/assets/cat.jpg"
import Navbar from "@/components/Features/Navbar";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Banner from "../../assets/banner.png"

export default function Play() {
    const [options, setOptions] = useState([
        {
            id: "5112412",
            image: HarambeImage,
            name: "Harambe",
            isSelected: false
        },
        {
            id: "25536",
            image: PepeImage,
            name: "Pepe",
            isSelected: false
        },
        {
            id: "23512414",
            image: FlyImage,
            name: "Hector",
            isSelected: false
        }
    ])

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
            <div className="border-b border-b-neutral-800 py-4 w-full">
                <div className="flex items-center max-w-[1400px] justify-center gap-2">
                    <div className="m-auto flex items-center gap-2">
                        <div className="rounded-full bg-green-200 w-7 h-7 overflow-hidden">
                            <Image 
                                src={CatImage}
                                alt="Meme cat"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-md">Raging cat</p>
                        <div className="bg-white rounded-md bg-red-950 text-red-300 font-regular px-2 text-xs">Your Opponent</div>
                    </div>
                    <div>
                        <p>Round <b className="text-green-600">1</b> of 5</p>
                    </div>
                </div>
            </div>

            <div className="flex min-h-screen flex-col items-center p-24">
                <h4 className="text-3xl font-bold text-neutral-100 font-mono">Choose:</h4>
                <div className="flex items-center gap-3 mt-7">
                    {options.map((option) => (
                        <div 
                            key={option.id}
                            onClick={() => handleOptionClick(option.id)}
                            className="border rounded-md border-neutral-100 cursor-pointer w-[250px] h-[250px] flex items-center flex-col border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                        >
                            {option.isSelected && (
                                <div className="absolute bg-black/50 h-full -mt-4 text-center px-2 flex flex-col items-center justify-center">
                                    <p className="mb-2">Are you sure to select {option.name}?</p>
                                    <Button>Fuck yeah!</Button>
                                </div>
                            )}
                            <p className="font-mono">{option.name}</p>
                            <Image 
                                src={option.image}
                                alt={option.name}
                                width={200}
                                className="m-auto"
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-[100px]">
                    <h4 className="text-3xl font-bold text-neutral-100 font-mono text-center mb-10">Guide:</h4>
                    <Image 
                        src={Banner}
                        alt="Banner"
                        width={600}
                        className="m-auto"
                    />
                </div>
            </div>  
        </main>
    );
}
