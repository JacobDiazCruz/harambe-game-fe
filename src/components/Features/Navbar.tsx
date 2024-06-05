import { AiTwotoneTrophy } from "react-icons/ai";
import Button from "../ui/Button";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
    return (
        <nav id="navbar" className="w-full px-6 py-4 border-b border-b-neutral-800 flex justify-between items-center">
        <p className="font-mono">MEME JUNGLE</p>
        <div className="flex items-center gap-2">
          <Button variant="secondary">
            <MdOutlineDarkMode className="text-xl" />
          </Button>
          <Button endIcon={<AiTwotoneTrophy />}>TOP STREAKS</Button>
          <Button>MORE</Button>
        </div>
      </nav>
    )
}