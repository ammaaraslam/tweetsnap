import { useTheme } from "next-themes";
import Image from "next/image";
import logoLight from "../public/LogoLight.svg";
import logoDark from "../public/LogoDark.svg";

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
        <a className="p-0 inline-flex items-center justify-center" href="/">
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
