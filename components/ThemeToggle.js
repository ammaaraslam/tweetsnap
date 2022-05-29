import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

import Image from "next/image";
import logoLight from "../public/LogoLight.svg";
import logoDark from "../public/LogoDark.svg";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="p-2 text-2xl rounded-xl text-primary border-2 border-primary hover:text-dark hover:bg-primary transition-all duration-200 ease-in-out"
      >
        <FaSun />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setTheme("dark")}
      className="p-2 text-2xl rounded-xl text-primary border-2 border-primary hover:text-light hover:bg-primary transition-all duration-200 ease-in-out"
    >
      <BsMoonStarsFill />
    </button>
  );
}

export default ThemeToggle;

export const LogoChange = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "light") {
    return (
      <div className="flex items-center justify-between mb-0 ml-4 transition-all duration-200">
        <a className="p-0" href="/">
          <Image
            src={logoLight}
            alt="TweetSnap Logo Light"
            width={55}
            height={55}
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between mb-0 ml-4 transition-all duration-200">
        <a className="p-0" href="/">
          <Image
            src={logoDark}
            alt="TweetSnap Logo Dark"
            width={55}
            height={55}
          />
        </a>
      </div>
    );
  }
};
