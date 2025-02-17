"use client";

import { Button } from "@/components/button";
import { ColorPicker } from "@/components/color-picker";
import { Input } from "@/components/input";
import { Message } from "@/components/message";
import { SendIcon } from "@/components/send-icon";
import { API_URL } from "@/constants/api.constant";
import { IMessage } from "@/interfaces/message.interface";
import { showToast } from "@/utils/ui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultMessage: IMessage = {
  to: "",
  message: "",
  bgColor: "#000",
  fgColor: "#fff",
};

export default function Page() {
  const [message, setMessage] = useState<IMessage>(defaultMessage);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    console.log({ message });
    if (!message.to) {
      showToast({
        type: "error",
        text1: "Error",
        text2: "Please enter a Twitter username to proceed",
      });
      return;
    }

    if (!message.message) {
      showToast({
        type: "error",
        text1: "Error",
        text2: "Please enter a message to proceed",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log({ theresponse: response });

      if (response.status >= 200 && response.status <= 299) {
        showToast({
          type: "success",
          text1: "Success",
          text2: "Message successfully posted",
        });

        router.push("/");
      }
    } catch (err) {
      console.log("err", err);
      alert("An error occured, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const maxLength = 200; // Set your max length

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > maxLength) {
      alert(`Max length is ${maxLength}`);
      e.preventDefault();
    } else {
      setMessage((prev) => ({
        ...prev,
        message: e.target.value,
      }));
    }
  };

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
              // onChange={(ev) => {
              //   setMessage((prev) => ({
              //     ...prev,
              //     message: ev.target.value,
              //   }));
              // }}
              onChange={handleMessage}
              // onInput={handleInput}
            />

            <Button
              variant="filled"
              className="mt-5 w-full text-lg"
              onClick={onSubmit}
              disabled={isLoading}
              isLoading={isLoading}
            >
              <SendIcon />
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
