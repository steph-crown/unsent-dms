export function Footer() {
  return (
    <footer className="w-full  wrapper">
      <div className="border-t border-solid border-[#EEE] dark:border-[#555] py-6 flex items-center justify-between">
        <p className="text-sm font-medium">
          Inspired by{" "}
          <a
            href="https://theunsentproject.com/"
            target="_blank"
            className="underline font-bold"
          >
            The Unsent Project
          </a>
        </p>

        <p className="text-sm font-medium">
          Developed with 💕 by{" "}
          <a
            href="https://twitter.com/stephcrown06"
            target="_blank"
            className="underline font-bold"
          >
            Steph Crown
          </a>
        </p>
      </div>
    </footer>
  );
}
