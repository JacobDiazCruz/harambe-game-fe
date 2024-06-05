import { useAppTheme } from "@/store/AppTheme";
import Link from "next/link";
import { AiTwotoneTrophy } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import Button from "../ui/Button";

export default function Navbar() {
  const { darkTheme, handleToggleDarkTheme } = useAppTheme();

  return (
    <>
      <div id="announcement" className="w-full bg-[#FCBA28]">
        <p className="text-[#231F20] text-center ml-10">
          🔥<b>Latest Reward:</b> First to get 10 streaks will receive 5 SOL!
        </p>
      </div>
      <nav
        id="navbar"
        className="relative dark:bg-[#0f1214] bg-white w-full px-6 py-4 border-b dark:border-b-neutral-800 border-b-neutral-300 flex justify-between items-center"
      >
        <Link href="/">
          <p className="font-mono dark:text-neutral-200 cursor-pointer">
            MEME JUNGLE
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={handleToggleDarkTheme}>
            <MdOutlineDarkMode className="text-xl" />
          </Button>
          <Button endIcon={<AiTwotoneTrophy />}>TOP STREAKS</Button>
          <Button>MORE</Button>
        </div>
      </nav>
    </>
  );
}
