import { useRouter, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const addQuery = (key: string, value: string) => {
    router.push(`/messages?${key}=${value}`);
  };

  const getQuery = (key: string) => {
    const value = searchParams.get(key);
    return value;
  };

  return { addQuery, getQuery };
}
