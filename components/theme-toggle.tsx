"use client";

import { useToggleTheme } from "@/hooks/use-toggle-theme";
import { Button } from "./button";

export function ThemeToggle() {
  const { toggleTheme } = useToggleTheme();

  return (
    <Button variant="outlined" onClick={toggleTheme}>
      Switch mode
    </Button>
  );
}
