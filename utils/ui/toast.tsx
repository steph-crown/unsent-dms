import { BaseToast } from "@/components/base-toast/base-toast";
import { toast } from "react-toastify";

export type ToastParams = {
  type: "success" | "error";
  text1: string;
  text2: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showToast = (params: ToastParams) => {
  toast(
    ({ closeToast, toastProps }) => (
      <BaseToast
        params={params}
        closeToast={closeToast}
        toastProps={toastProps}
      />
    ),
    {
      type: params.type,
      position: "top-right",
      autoClose: 3000,
    }
  );
};
