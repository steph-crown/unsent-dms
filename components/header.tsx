"use client";

import { Button } from "@/components/button";
import { Hamburger } from "@/components/hamburger";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CloseIcon } from "./close-icon";
import { SendIcon } from "./send-icon";

export function Header() {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log({ isMobileMenuOpen });

  return (
    <>
      <header className="flex items-center wrapper py-5 justify-between">
        <Logo />

        <div className="items-center gap-2 hidden md:flex">
          <ThemeToggle />

          <Button
            variant="filled"
            onClick={() => {
              router.push("/messages/send");
            }}
          >
            <SendIcon />
            Send message now
          </Button>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Hamburger />
        </button>
      </header>

      {/* mobile menu */}
      <div
        className={classNames(
          "fixed w-screen bg-white-bg dark:bg-black-bg border-t border-black-bg dark:border-white-bg bottom-0 left-0 right-0 min-h-[10rem] h-max transition-transform duration-300 z-[1000000]",
          {
            "translate-x-0": isMobileMenuOpen,
            "translate-x-full": !isMobileMenuOpen,
          }
        )}
      >
        <div className="wrapper py-5 flex flex-col gap-4 ">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <ThemeToggle />

          <Button
            variant="filled"
            onClick={() => {
              router.push("/messages/send");
            }}
          >
            <SendIcon />
            Send message now
          </Button>
        </div>
      </div>
    </>
  );
}
