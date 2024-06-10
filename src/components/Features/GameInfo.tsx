import CatImage from "@/assets/cat.jpg";
import Image from "next/image";

export default function GameInfo() {
  return (
    <div className="dark:bg-[#0f1214] bg-white border-b border-b-neutral-300 dark:border-b-neutral-800 py-4 w-full">
      <div className="flex items-center justify-center gap-[500px]">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-200 w-7 h-7 overflow-hidden">
            <Image src={CatImage} alt="Meme cat" width={100} height={100} />
          </div>
          <p className="text-md dark:text-neutral-200">Raging cat</p>
          <div className="bg-red-100 rounded-md dark:bg-red-950 dark:text-red-300 text-red-600 font-regular px-2 text-xs">
            Your Opponent
          </div>
        </div>
        <div>
          <p className="dark:text-neutral-200">
            Round <b className="text-green-600">1</b> of 5
          </p>
        </div>
      </div>
    </div>
  );
}
