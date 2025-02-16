"use client";

import { Button } from "@/components/button";
import { ColorPicker } from "@/components/color-picker";
import { Input } from "@/components/input";
import { Message } from "@/components/message";
import { IMessage } from "@/interfaces/message.interface";
import { useState } from "react";

const defaultMessage: IMessage = {
  to: "",
  message: "",
  bgColor: "#000",
  fgColor: "#fff",
};

export default function Page() {
  const [message, setMessage] = useState<IMessage>(defaultMessage);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center wrapper justify-center my-10 ">
        <div className="max-w-full w-[50rem]">
          <p className="text-sm font-medium mb-2">
            Who is this message directed to?
          </p>

          <Input
            placeholder="Enter Twitter username"
            onChange={(ev) => {
              setMessage((prev) => ({
                ...prev,
                to: ev.target.value,
              }));
            }}
          />
        </div>

        <div className="max-w-full w-[50rem] flex gap-4 flex-col sm:flex-row">
          <div className="w-[35rem] max-w-full">
            <Message
              message={message}
              setMessage={setMessage}
              isEditing={true}
            />

            <Button variant="filled" className="mt-5 w-full text-lg">
              Send message
            </Button>
          </div>

          {/* colors */}
          <div className="w-full md:w-[15rem]">
            <ColorPicker
              onSelectColor={(color) => {
                setMessage((prev) => ({
                  ...prev,
                  bgColor: color.bg,
                  fgColor: color.fg,
                }));
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
