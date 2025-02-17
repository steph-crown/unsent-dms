import "./base-toast.css";
import { Checkmark } from "../checkmark";
import { SquareInfo } from "../square-info";
import { Close } from "../close";
import { ToastParams } from "@/utils/ui/toast";

interface Props {
  params: ToastParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toastProps: any;
  closeToast: () => void;
}

export function BaseToast({ closeToast, params }: Props) {
  const getIcon = () => {
    switch (params.type) {
      case "success":
        return <Checkmark className="text-success h-10 mb-1" />;
      case "error":
        return <SquareInfo className="text-error h-10 mb-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 pb-[2.75rem] bg-white relative w-full rounded-none min-[385px]:rounded">
      <button onClick={closeToast} className="top-4 right-4 absolute">
        <Close className="text-black" />
      </button>

      {getIcon()}

      <h4 className="font-bold text-black font-instrumentSans text-lg mb-1">
        {params.text1}
      </h4>

      <p className="font-instrumentSans text-sm leading-5 text-inputtext">
        {params.text2}
      </p>
    </div>
  );
}
