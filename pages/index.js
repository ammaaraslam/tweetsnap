import { MdOutlineCamera } from "react-icons/md";
import { useState } from "react";

import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal";
import Head from "next/head";
import { RoundedButton } from "../components/RoundedButton";
import Tweet from "../components/Tweet";
import Settings from "../components/Settings";

const options = ["Mangoes", "Apples", "Oranges"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const credits = "</> with 💙 by Ammaar Aslam";

  return (
    <div>
      <Head>
        <title>Next.js and Tailwind starter</title>
        <meta name="description" content="Next.js and Tailwind starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen bg-light dark:bg-dark overflow-hidden transition-all duration-200">
        {/* Modal */}
        <Modal />
        {/* Header - Logo + Search + Theme Toggle */}
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
              {/* <li class="mr-7">{renderThemeToggle()}</li> */}
              <li class="mr-4">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </header>
        <form class="w-3/4 mb-0 mt-12 md:w-1/2 ml-auto mr-auto md:-mt-9">
          <label class="hidden" for="search-form">
            Search
          </label>
          <input
            class="h-12 font-medium text-secondary pl-2 pr-16 outline-none bg-text dark:bg-textDark border-2 border-textS dark:border-textSDark rounded-2xl w-full placeholder:text-secondary placeholder:mt-auto placeholder:mb-auto dark:placeholder:text-secondary focus:bg-textS dark:focus:bg-textSDark transition-all duration-200 ease-in"
            placeholder="Paste/Enter Link to you Tweet"
            type="text"
          />
          <button class="p-2 font-medium w-16 h-12 items-center text-center text-secondary hover:text-textLight dark:hover:text-textDark bg-text dark:bg-textDark border-2 border-secondary dark:border-secondary focus:bg-secondary dark:focus:bg-secondary hover:bg-secondary dark:hover:bg-secondary absolute rounded-2xl -translate-x-16 transition-all duration-200 ease-in">
            <MdOutlineCamera className="ml-auto mr-auto text-2xl" />
          </button>
        </form>
        {/* Main Body */}
        <div className="w-full h-3/4 pt-5 md:flex items-center justify-between">
          <Tweet />
          <Settings />
        </div>
        {/* Footer */}
        <div className="absolute inline-flex bottom-0 p-2 w-full justify-center items-center">
          <a
            href="https://twitter.com/itsammaar_7"
            target="_blank"
            className="text-center font-semibold text-textDark dark:text-textLight hover:text-secondary dark:hover:text-secondary"
          >
            {credits}
          </a>
        </div>
      </main>
    </div>
  );
}
