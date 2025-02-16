import classNames from "classnames";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props) {
  return (
    <input
      className={classNames(
        className,
        "px-4 py-3 rounded-[0.25rem] text-sm font-semibold font-[Geist] bg-white-bg dark:bg-black-bg text-black-fg dark:text-white-fg border border-solid border-[#ddd] dark:border-[#555] dark:focus:border-white-bg focus:border-black-bg outline-none w-full transition-all"
      )}
      {...rest}
    />
  );
}
