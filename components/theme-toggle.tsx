"use client";

import { useToggleTheme } from "@/hooks/use-toggle-theme";
import { Button } from "./button";
import Image from "next/image";

export function ThemeToggle() {
  const { toggleTheme, theme } = useToggleTheme();

  console.log({ theme });

  return (
    <Button variant="outlined" onClick={toggleTheme}>
      {theme === "light" ? (
        <Image src="/moon.svg" width={20} height={20} alt="Toggle theme" />
      ) : (
        <Image src="/sun.svg" width={20} height={20} alt="Toggle theme" />
      )}
      Switch to {theme === "light" ? "dark" : "light"} mode
    </Button>
  );
}
