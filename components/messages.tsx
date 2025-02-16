import { IMessage } from "@/interfaces/message.interface";
import { Message } from "./message";

type Props = {
  messages: IMessage[];
};

export function Messages({ messages }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
