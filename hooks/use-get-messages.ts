import { API_URL } from "@/constants/api.constant";
import { IMessage } from "@/interfaces/message.interface";
import { useEffect, useMemo, useState } from "react";
import { useQueryParams } from "./use-query-params";

export function useGetMessages() {
  const limit = 20;
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [count, setCount] = useState(0);
  const { getQuery } = useQueryParams();

  useEffect(() => {
    getMessages();
  }, [getQuery("to")]);

  const getMessages = async (localOffset?: number) => {
    const toQueryFromUrl = getQuery("to") || "";

    const toQuery = toQueryFromUrl ? `to=${toQueryFromUrl}&` : "";
    console.log({ ieieeieiei: offset });

    try {
      setIsFetching(true);
      const response = await fetch(
        `${API_URL}/messages?${toQuery}limit=${limit}&offset=${
          localOffset || offset
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log({ datayii: data });
        setMessages(
          (localOffset || offset) === 0
            ? data?.data?.messages
            : [...(messages || []), ...(data?.data?.messages || [])]
        );
        setCount(data?.data?.total);
      }
    } catch (err) {
      console.log({ err });
    } finally {
      setIsFetching(false);
    }
  };

  console.log({ themessagess: messages, count });

  const resetMessages = () => {
    setMessages([]);
    setOffset(0);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const hasMoreMessages = useMemo(() => {
    return messages.length < count;
  }, [messages, count]);

  const getMoreMessages = () => {
    console.log({ hasMoreMessages, isFetching });
    if (hasMoreMessages && !isFetching) {
      getMessages(offset + 1);
      setOffset((prev) => prev + 1);
    }
  };

  console.log({ frenchhh: offset });

  return {
    getMessages,
    resetMessages,
    messages,
    setOffset,
    limit,
    getMoreMessages,
    isFetching,
    count,
  };
}
