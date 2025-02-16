import { Button } from "@/components/button";
import { Hamburger } from "@/components/hamburger";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import classNames from "classnames";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center wrapper py-5 justify-between">
        <Logo />

        <div className="items-center gap-2 hidden md:flex">
          <ThemeToggle />

          <Button variant="filled">Send it now</Button>
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
          "fixed w-screen bg-white-bg dark:bg-black-bg border-t border-black-bg dark:border-white-bg bottom-0 left-0 right-0 h-[10rem] translate-x-[100vw] transition-transform duration-300 z-[1000000]",
          {
            "translate-x-0": isMobileMenuOpen,
          }
        )}
      >
        <div className="wrapper py-5 flex flex-col gap-4">
          <ThemeToggle />

          <Button variant="filled">Send it now</Button>
        </div>
      </div>
    </>
  );
}
