import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

import Modal from "../components/Modal";
import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

  // toggle responsible for changing the theme
  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          type="button"
          className="p-2 text-2xl rounded-full text-primary hover:bg-primary hover:text-lptext transition-all duration-400 ease-in-out"
        >
          <BsMoonFill />
        </button>
      );
    }
    return (
      <button
        onClick={() => setTheme("dark")}
        type="button"
        className="p-2 text-2xl rounded-full text-primary hover:bg-primary hover:text-dptext transition-all duration-400 ease-in-out"
      >
        <BsFillSunFill />
      </button>
    );
  };

  return (
    <div>
      <Head>
        <title>Next.js and Tailwind starter</title>
        <meta name="description" content="Next.js and Tailwind starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen bg-light dark:bg-dark overflow-hidden transition-all duration-200">
        <header class="flex items-center justify-between pt-8 pb-0">
          <div class="flex items-center justify-between mb-0 ml-4">
            <h1 class="leading-none text-2xl text-grey-darkest">
              <a
                class="no-underline text-primary hover:text-text-primary"
                href="#"
              >
                TweetSnap
              </a>
            </h1>
          </div>
          <nav>
            <ul class="list-reset flex items-center">
              <li class="mr-7">{renderThemeToggle()}</li>
              <li class="mr-4">{renderThemeToggle()}</li>
            </ul>
          </nav>
        </header>
        <form class="w-3/4 mb-0 mt-12 md:w-1/2 ml-auto mr-auto md:-mt-9">
          <label class="hidden" for="search-form">
            Search
          </label>
          <input
            class="h-12 font-medium text-secondary pl-2 pr-16 outline-none bg-dptext dark:bg-lptext border-2 border-dstext dark:border-lstext rounded-2xl w-full placeholder:text-secondary dark:placeholder:text-secondary focus:bg-dstext dark:focus:bg-lstext transition-all duration-200 ease-in"
            placeholder="Paste/Enter Link to you Tweet"
            type="text"
          />
          <button class="p-2 font-medium h-12 text-secondary bg-dptext dark:bg-lptext border-2 border-dstext dark:border-lstext focus:bg-dstext dark:focus:bg-lstext hover:bg-dstext dark:hover:bg-lstext absolute rounded-2xl -translate-x-16 transition-all duration-200 ease-in">
            Submit
          </button>
        </form>
        {/* Modal */}
        <Modal />
      </main>
    </div>
  );
}
