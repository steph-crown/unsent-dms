"use client";

import { Button } from "@/components/button";
import { InlineLoader } from "@/components/loader/inline-loader";
import { Message } from "@/components/message";
import { API_URL } from "@/constants/api.constant";
import { IMessage } from "@/interfaces/message.interface";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [isFetching, setIsFetching] = useState(true);
  const [message, setMessage] = useState<IMessage | null>(null);
  const router = useRouter();
  const params = useParams();

  const getMessage = async (id: string) => {
    console.log("id", id);
    try {
      setIsFetching(true);

      const response = await fetch(`${API_URL}/messages/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log({ thedataaa: data });
      setMessage(data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    console.log("kakakakkaka", params);
    if (params.id) {
      getMessage(params.id as string);
    }
  }, []);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center wrapper justify-center my-10 ">
        <div className="w-full max-w-[35rem]">
          {isFetching ? (
            <div className="flex w-full justify-center gap-3">
              <InlineLoader autoMode />
              <p className="text-sm font-semibold">Loading</p>
            </div>
          ) : message ? (
            <Message message={message!} />
          ) : (
            <p>Message not found</p>
          )}

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
