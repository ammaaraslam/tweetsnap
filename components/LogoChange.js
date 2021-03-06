import { useTheme } from "next-themes";
import Image from "next/image";
import logoLight from "../public/LogoLight.svg";
import logoDark from "../public/LogoDark.svg";
import Link from "next/link";

export const LogoChange = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme;
  if (currentTheme === "dark") {
    return (
      <div className="flex items-center justify-between mb-0 ml-4 transition-all duration-300">
        <Link href="/">
          <div className="p-0 inline-flex items-center justify-center">
            <Image
              src={logoDark}
              alt="TweetSnap Logo Dark"
              width={55}
              height={55}
            />
            <span
              id="logo-title"
              className="ml-3 font-extrabold text-3xl text-light"
            >
              TweetSnap
            </span>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between mb-0 ml-4 transition-all duration-300">
        <Link href="/">
          <div className="p-0 inline-flex items-center justify-center">
            <Image
              src={logoLight}
              alt="TweetSnap Logo Light"
              width={55}
              height={55}
            />
            <span
              id="logo-title"
              className="ml-3 font-extrabold text-3xl text-dark"
            >
              TweetSnap
            </span>
          </div>
        </Link>
      </div>
    );
  }
};
