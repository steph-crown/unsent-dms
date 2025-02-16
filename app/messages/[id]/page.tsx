"use client";

import { Button } from "@/components/button";
import { Message } from "@/components/message";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const message = {
    id: "1",
    to: "john_doe",
    createdDate: "2021-09-01",
    message:
      "Please let me know if you change your mind. I told you last week to get out",
    bgColor: "#f388ff",
    fgColor: "#000",
  };

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center wrapper justify-center my-10 ">
        <div className="w-full max-w-[35rem]">
          <Message message={message} />

          <Button
            variant="outlined"
            className="mt-6"
            onClick={() => {
              router.back();
            }}
          >
            Go back
          </Button>
        </div>
      </main>
    </div>
  );
}
