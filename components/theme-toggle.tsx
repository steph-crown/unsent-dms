import { useToggleTheme } from "@/hooks/use-toggle-theme";
import { Button } from "./button";

export function ThemeToggle() {
  const { toggleTheme } = useToggleTheme();

  return <Button onClick={toggleTheme}>Switch mode</Button>;
}
