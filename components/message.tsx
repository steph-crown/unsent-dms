"use client";

import { IMessage } from "@/interfaces/message.interface";
import { MessageIcon } from "./message-icon";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

type Props = {
  message: IMessage;
  setMessage?: (message: IMessage) => void;
  isEditing?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export function Message({ message, isEditing, onChange }: Props) {
  const router = useRouter();

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
    <div
      className="border-[3px] border-solid border-black-bg dark:border-white-bg w-full py-2 px-4 rounded cursor-pointer "
      onClick={() => {
        if (isEditing) return;
        router.push(`/messages/${message.id}`);
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">
          To: <span className="font-bold">@{message.to}</span>
        </p>

        <MessageIcon />
      </div>

      {isEditing ? (
        <textarea
          className="my-2 rounded-sm p-4 text-3xl font-medium min-h-[20rem] w-full outline-none border-none"
          style={{
            background: message.bgColor,
            color: message.fgColor,
            cursor: isEditing ? "text" : "pointer",
          }}
          value={message.message}
          onChange={onChange}
        />
      ) : (
        <div
          className="my-2 rounded-sm p-4 text-3xl font-medium min-h-[20rem]"
          style={{
            background: message.bgColor,
            color: message.fgColor,
            cursor: isEditing ? "text" : "pointer",
          }}
          // contentEditable={isEditing}
          // onInput={onInput}
        >
          {message.message}
        </div>
      )}

      <div>
        <p className="font-medium">
          Sent on{" "}
          <span className="font-bold">
            {formatDate(message?.createdDate || new Date().toISOString())}
          </span>
        </p>
      </div>
    </div>
  );
}
