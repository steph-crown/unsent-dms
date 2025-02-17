"use client";

import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Input } from "@/components/input";
import { Messages } from "@/components/messages";
import { useGetMessages } from "@/hooks/use-get-messages";
import { useQueryParams } from "@/hooks/use-query-params";
import { isValidTwitterUsername } from "@/utils/is-valid-twitter-username";
import { showToast } from "@/utils/ui/toast";
import { useEffect, useState } from "react";

export default function Home() {
  const { addQuery, getQuery } = useQueryParams();
  const toQuery = getQuery("to") || "";

  const [twitterUsername, setTwitterUsername] = useState("");

  useEffect(() => {
    setTwitterUsername(toQuery || "");
  }, [toQuery]);

  const {
    getMessages,
    resetMessages,
    getMoreMessages,
    messages,
    isFetching,
    count,
  } = useGetMessages();

  const onSearch = (ev: any) => {
    ev.preventDefault();
    if (!isValidTwitterUsername(twitterUsername)) {
      showToast({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid Twitter username",
      });
      return;
    }

    resetMessages();
    // getMessages();
    addQuery("to", twitterUsername);
    // getMessages(undefined, twitterUsername);
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

          <form className="flex items-center gap-4" onSubmit={onSearch}>
            <Input
              prefixNode={<p>@</p>}
              placeholder="Enter a Twitter username"
              value={twitterUsername}
              onChange={(ev) => {
                setTwitterUsername(ev.target.value);
              }}
            />

            <Button type="submit" variant="filled">
              Search
            </Button>
          </form>
        </div>

        <div className="w-full">
          {!isFetching && (
            <p className="text-base text-center font-medium text-[#444] dark:text-[#ccc] mb-6">
              {count} messages found
            </p>
          )}

          <Messages messages={messages} isFetching={isFetching} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
