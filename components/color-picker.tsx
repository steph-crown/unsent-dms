import { COLORS } from "@/constants/colors.constant";

type Props = {
  onSelectColor: (color: { bg: string; fg: string }) => void;
};

export function ColorPicker({ onSelectColor }: Props) {
  return (
    <div className="flex gap-2.5 flex-wrap ">
      {COLORS.map((color) => (
        <button
          key={color.bg}
          className="w-[2.4rem] h-[2.4rem] border-[3px] border-solid border-black-bg dark:border-white-bg rounded-sm"
          onClick={() => onSelectColor(color)}
          style={{ background: color.bg }}
        ></button>
      ))}
    </div>
  );
}
