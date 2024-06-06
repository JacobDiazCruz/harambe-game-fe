import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface PlayfulButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
}

export default function PlayfulButton({
  children,
  size = "medium",
  onClick,
}: PlayfulButtonProps) {
  const router = useRouter();

  const buttonSizes: Record<string, string> = {
    large: "text-[16px] px-5 py-3",
    medium: "text-[14px] px-3 py-2",
    small: "text-[12px] px-2",
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={onClick}
        className={`${buttonSizes[size]} px-6 py-3 bg-[#F38BA3] relative z-[5] font-mono rounded-full text-[#231F20] font-semibold border border-[#231F20] rounded-md`}
      >
        {children}
      </button>
      <button
        onClick={onClick}
        className={`bg-black -mt-[45px] relative z-[4] h-[50px] w-full font-semibold border border-[#231F20] rounded-md`}
      ></button>
    </div>
  );
}
