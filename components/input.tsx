import classNames from "classnames";

type Props = {
  prefixNode?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, prefixNode, ...rest }: Props) {
  return (
    <div className="w-full relative">
      <input
        className={classNames(
          className,
          "pl-8 px-4 py-3 rounded-[0.25rem] text-sm font-semibold font-[Geist] bg-white-bg dark:bg-black-bg text-black-fg dark:text-white-fg border border-solid border-[#aaa] dark:border-[#555] dark:focus:border-white-bg focus:border-black-bg outline-none w-full transition-all"
        )}
        {...rest}
      />

      {prefixNode && (
        <div className="absolute top-1/2 z-[22] left-4 -translate-y-1/2">
          {prefixNode}
        </div>
      )}
    </div>
  );
}
