import { useRouter } from "next/router";
import { StrictMode } from "react";
export const redirectTo = (url) => {
  const router = useRouter();
  router.push(url);
};
