import { IMessage } from "@/interfaces/message.interface";
import { MessageIcon } from "./message-icon";

type Props = {
  message: IMessage;
};

export function Message({ message }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="border-[3px] border-solid border-black-bg dark:border-white-bg w-full py-2 px-4 rounded ">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">
          To: <span className="font-bold">@{message.to}</span>
        </p>

        <MessageIcon />
      </div>

      <div
        className="my-2 rounded-sm p-4 text-3xl font-medium h-[20rem]"
        style={{
          background: message.bgColor,
          color: message.fgColor,
        }}
      >
        {message.message}
      </div>

      <div>
        <p className="font-medium">
          Sent on{" "}
          <span className="font-bold">{formatDate(message.createdDate)}</span>
        </p>
      </div>
    </div>
  );
}
