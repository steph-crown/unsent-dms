import classNames from "classnames";
import { ReactNode } from "react";
import { InlineLoader } from "./loader/inline-loader";

type Props = {
  children: ReactNode;
  variant?: "filled" | "outlined";
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  isLoading,
  className,
  ...rest
}: Props) {
  return (
    <button
      className={classNames(
        className,
        "px-4 py-3 rounded-[0.25rem] text-sm font-semibold font-[Geist] hover:scale-95 transition-all flex items-center gap-2 justify-center",
        variant === "filled" &&
          "bg-black-bg text-white-fg dark:bg-white-bg dark:text-black-fg disabled:bg-[#e1e1e1] disabled:text-black-bg dark:disabled:text-black-bg",
        variant === "outlined" &&
          "border-[1.5px] border-black-bg text-black-bg dark:border-white-bg dark:text-white-bg disabled:bg-[#71717A]"
      )}
      {...rest}
    >
      {isLoading && <InlineLoader />}
      {children}
    </button>
  );
}
