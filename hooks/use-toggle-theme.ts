import { useEffect, useState } from "react";

export function useToggleTheme(): {
  toggleTheme: () => void;
  theme: "dark" | "light" | undefined;
} {
  const [theme, setTheme] = useState<"dark" | "light" | undefined>(undefined);

  useEffect(() => {
    setTheme(
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as "dark" | "light")
        : "dark"
    );
  }, []);

  const makeDark = () => {
    console.log("fooooooo");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const makeLight = () => {
    console.log("foooooookkkk");

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  console.log({ thethemeeee: theme });

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) makeLight();
    else makeDark();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");

      if (theme === "dark") makeDark();
      else makeLight();

      if (theme) return;

      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDarkMode) makeDark();
      else makeLight();
    }
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      makeDark();
    }
  }, []);

  return {
    toggleTheme,
    theme,
  };
}
