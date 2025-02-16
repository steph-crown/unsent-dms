"use client";

import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { Messages } from "@/components/messages";
import { IMessage } from "@/interfaces/message.interface";

const messages: IMessage[] = [
  {
    id: "1",
    to: "john_doe",
    createdDate: "2021-09-01",
    message:
      "Please let me know if you change your mind. I told you last week to get out",
    color: "#f388ff",
  },
  {
    id: "2",
    to: "john_doe",
    createdDate: "2021-09-01",
    message: "Please let me know if you change your mind",
    color: "#FFD700",
  },
  {
    id: "3",
    to: "john_doe",
    createdDate: "2021-09-01",
    message: "Please let me know if you change your mind",
    color: "#FFD700",
  },
  {
    id: "4",
    to: "john_doe",
    createdDate: "2021-09-01",
    message: "Please let me know if you change your mind",
    color: "#FFD700",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative overflow-x-hidden">
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center wrapper justify-center mt-10">
        <h1 className="text-center text-6xl">
          A Collection of <span className="font-semibold">Unsent DMs</span>
        </h1>

        <p className="text-lg text-center max-w-[54rem] font-medium text-[#444] dark:text-[#ccc]">
          We all have words we’ve typed but couldn’t send. Whether it’s a
          confession, an apology, or something you never got to say. This is the
          place to share those unsent DMs with that one Twitter user.
        </p>

        <div className="w-full border-t border-solid border-[#EEE] dark:border-[#555] pt-6">
          <p className="text-sm font-medium mb-2">
            Find messages addressed to you or someone you know.
          </p>

          <div className="flex items-center gap-4">
            <Input placeholder="Enter a Twitter username" />

            <Button variant="filled">Search</Button>
          </div>
        </div>

        <div className="w-full">
          <p className="text-base text-center font-medium text-[#444] dark:text-[#ccc] mb-6">
            24 messages found
          </p>

          <Messages messages={messages} />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
