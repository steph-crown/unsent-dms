"use client";

import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative overflow-x-hidden">
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
