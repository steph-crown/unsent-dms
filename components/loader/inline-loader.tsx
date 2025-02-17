import classNames from "classnames";
import "./loader.css";

type Props = {
  size?: "small" | "medium" | "large";
  color?: string;
  autoMode?: boolean;
};

export function InlineLoader({
  autoMode,
  color = "white",
  size = "small",
}: Props) {
  return (
    <span
      className={classNames(
        "inline-loader",
        size === "small" && "h-4 w-4",
        autoMode && "!border-black-bg dark:!border-white-bg"
      )}
      style={{ borderColor: color }}
    ></span>
  );
}
