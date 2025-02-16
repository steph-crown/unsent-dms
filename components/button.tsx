import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "filled" | "outlined";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, className, ...rest }: Props) {
  return (
    <button
      className={classNames(
        className,
        "px-4 py-3 rounded-[0.25rem] text-sm font-semibold font-[Geist] hover:scale-95 transition-all",
        variant === "filled" &&
          "bg-black-bg text-white-fg dark:bg-white-bg dark:text-black-fg",
        variant === "outlined" &&
          "border border-black-bg text-black-bg dark:border-white-bg dark:text-white-bg"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
