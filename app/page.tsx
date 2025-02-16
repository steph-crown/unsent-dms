"use client";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center container py-5 justify-between">
        <Logo />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button variant="filled">Send it now</Button>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
