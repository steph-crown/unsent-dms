import { IMessage } from "@/interfaces/message.interface";
import { Message } from "./message";
import { InlineLoader } from "./loader/inline-loader";

type Props = {
  messages: IMessage[];
  isFetching: boolean;
};

export function Messages({ messages, isFetching }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      {isFetching && (
        <div className="flex w-full justify-center mt-12 gap-3">
          <InlineLoader autoMode />
          <p className="text-sm font-semibold">Loading</p>
        </div>
      )}
    </>
  );
}
