"use client";

import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Input } from "@/components/input";
import { Messages } from "@/components/messages";
import { useGetMessages } from "@/hooks/use-get-messages";
import { useQueryParams } from "@/hooks/use-query-params";
import { useState } from "react";

// const messages: IMessage[] = [
//   {
//     id: "1",
//     to: "john_doe",
//     createdDate: "2021-09-01",
//     message:
//       "Please let me know if you change your mind. I told you last week to get out",
//     bgColor: "#f388ff",
//     fgColor: "#000",
//   },
//   {
//     id: "2",
//     to: "john_doe",
//     createdDate: "2021-09-01",
//     message: "Please let me know if you change your mind",
//     bgColor: "#FFD700",
//     fgColor: "#000",
//   },
//   {
//     id: "3",
//     to: "john_doe",
//     createdDate: "2021-09-01",
//     message: "Please let me know if you change your mind",
//     bgColor: "#000a8a",
//     fgColor: "#fff",
//   },
//   {
//     id: "4",
//     to: "john_doe",
//     createdDate: "2021-09-01",
//     message: "Please let me know if you change your mind",
//     bgColor: "#FFD700",
//     fgColor: "#000",
//   },
// ];

export default function Home() {
  const { addQuery, getQuery } = useQueryParams();

  const [twitterUsername, setTwitterUsername] = useState(getQuery("to") || "");

  const {
    getMessages,
    resetMessages,
    getMoreMessages,
    messages,
    isFetching,
    count,
  } = useGetMessages(twitterUsername);

  const onSearch = () => {
    resetMessages();
    // getMessages();
    addQuery("to", twitterUsername);
    getMessages();
  };

  const handleScroll = (ev: any) => {
    if (
      ev.target?.scrollTop + ev.target?.clientHeight >=
      ev.target?.scrollHeight - 10
    ) {
      console.log("Bottom reached");
      // setOffset((prev) => prev + limit);
      getMoreMessages();
    }
  };

  return (
    <div
      className="h-[calc(100vh_-_6.25rem)] overflow-y-auto body-scroll"
      onScroll={handleScroll}
    >
      <main className="flex flex-col gap-4 md:gap-8 row-start-2 items-center wrapper justify-center my-10 ">
        <h1 className="text-center text-[2rem] md:text-6xl">
          A Collection of <span className="font-semibold">Unsent DMs</span>
        </h1>

        <p className="text-base md:text-lg text-center max-w-[54rem] font-medium text-[#444] dark:text-[#ccc]">
          We all have words we’ve typed but couldn’t send. Whether it’s a
          confession, an apology, or something you never got to say. This is the
          place to share those unsent DMs with that one Twitter user.
        </p>

        <div className="w-full border-t border-solid border-[#EEE] dark:border-[#555] pt-6">
          <p className="text-sm font-medium mb-2">
            Find messages addressed to you or someone you know.
          </p>

          <div className="flex items-center gap-4">
            <Input
              prefixNode={<p>@</p>}
              placeholder="Enter a Twitter username"
              value={twitterUsername}
              onChange={(ev) => {
                setTwitterUsername(ev.target.value);
              }}
            />

            <Button variant="filled" onClick={onSearch}>
              Search
            </Button>
          </div>
        </div>

        <div className="w-full">
          <p className="text-base text-center font-medium text-[#444] dark:text-[#ccc] mb-6">
            {count} messages found
          </p>

          <Messages messages={messages} isFetching={isFetching} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
