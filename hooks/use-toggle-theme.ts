import { useEffect } from "react";

export function useToggleTheme() {
  const makeDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const makeLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) makeLight();
    else makeDark();
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") makeDark();
    else makeLight();

    if (theme) return;

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkMode) makeDark();
    else makeLight();
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return { toggleTheme, theme: localStorage.getItem("theme") };
}
