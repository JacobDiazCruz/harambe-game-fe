import { ReactNode } from "react";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

interface ButtonProps {
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

const buttonVariants: Record<string, string> = {
  primary: "dark:bg-neutral-50 bg-[#252525] dark:text-neutral-950 text-white",
  secondary:
    "dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border dark:text-neutral-200 text-[#222]",
  tertiary:
    "dark:bg-neutral-900 dark:border-neutral-800 border dark:text-neutral-200 text-[#222]",
};

const buttonSizes: Record<string, string> = {
  large: "text-[16px] px-5 py-3",
  medium: "text-[14px] px-3 py-2",
  small: "text-[12px] px-2",
};

export default function Button({
  variant = "primary",
  size = "medium",
  loading = false,
  startIcon,
  endIcon,
  id,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      id={id}
      type="button"
      disabled={disabled}
      className={[
        "storybook-button rounded-md font-medium hover:opacity-[0.7] transition ease-in-out delay-[300]",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex items-center justify-center">
        {loading && <AnimatedLoadingIcon size={size} />}
        {startIcon && <span className="mr-2 text-[16px]">{startIcon}</span>}
        {children}
        {endIcon && <span className="ml-2 text-[16px]">{endIcon}</span>}
      </div>
    </button>
  );
}