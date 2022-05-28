import { useTheme } from "next-themes";
import { RoundedButton } from "./RoundedButton";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
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
};

export default ThemeToggle;
