import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";

function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="p-2 text-2xl rounded-xl text-primary border-2 border-primary hover:text-dark hover:bg-primary transition-all duration-300 ease-in-out"
      >
        <IoSunny />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setTheme("dark")}
      className="p-2 text-2xl rounded-xl text-primary border-2 border-primary hover:text-light hover:bg-primary transition-all duration-300 ease-in-out"
    >
      <IoMoon />
    </button>
  );
}

export default ThemeToggle;
