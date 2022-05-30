import { MdOutlineCamera } from "react-icons/md";
import ThemeToggle, { LogoChange } from "../components/ThemeToggle";
import Modal from "../components/Modal";
import Head from "next/head";
import Tweet from "../components/Tweet";
import Settings from "../components/Settings";
import { useState } from "react";
import axios from "axios";

export default function Home({ articles }) {
  const credits = "</> with 💙 by Ammaar Aslam";
  const [bg, setBg] = useState(
    "linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)"
  );
  const [cardColor, setCardColor] = useState("rgb(255, 67, 5)");
  const [opacity, setOpacity] = useState(1);

  const propsForSettings = {
    bg,
    setBg,
    cardColor,
    setCardColor,
    opacity,
    setOpacity,
  };
  console.log(articles);

  return (
    <div>
      <Head>
        <title>Next.js and Tailwind starter</title>
        <meta name="description" content="Next.js and Tailwind starter" />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <main className="w-full h-screen bg-light dark:bg-dark md:overflow-hidden transition-all duration-300">
        {/* Modal */}
        <Modal />
        {/* Header - Logo + Search + Theme Toggle */}
        <header className="flex items-center justify-between pt-8 pb-0">
          <LogoChange />
          <nav>
            <ul className="list-reset flex items-center">
              {/* <li className="mr-7">{renderThemeToggle()}</li> */}
              <li className="mr-4">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </header>
        <form className="mb-0 mt-4 w-3/4 md:w-1/2 ml-auto mr-auto md:-mt-11">
          <label className="hidden" for="search-form">
            Search
          </label>
          <input
            className="h-12 font-medium text-secondary pl-2 pr-16 outline-none bg-text dark:bg-textDark border-2 border-textS dark:border-textSDark rounded-2xl w-full placeholder:text-secondary placeholder:mt-auto placeholder:mb-auto dark:placeholder:text-secondary focus:bg-textS dark:focus:bg-textSDark transition-all duration-200"
            placeholder="Paste/Enter Link to you Tweet"
            type="text"
          />
          <button className="p-2 font-medium w-16 h-12 items-center text-center text-secondary hover:text-textLight dark:hover:text-textDark bg-text dark:bg-textDark border-2 border-secondary dark:border-secondary focus:bg-secondary dark:focus:bg-secondary hover:bg-secondary dark:hover:bg-secondary absolute rounded-2xl -translate-x-16 transition-all duration-200">
            <MdOutlineCamera className="ml-auto mr-auto text-2xl" />
          </button>
        </form>
        {/* Main Body */}
        <div className="w-full h-3/4 mt-7 md:flex items-center justify-between">
          <Tweet bg={bg} cardColor={cardColor} opacity={opacity} />
          <Settings props={propsForSettings} />
        </div>
        {/* Footer */}
        <div className="absolute inline-flex bottom-0 p-2 w-full justify-center items-center">
          <a
            href="https://twitter.com/itsammaar_7"
            target="_blank"
            className="text-center font-semibold text-textDark dark:text-textLight hover:text-secondary dark:hover:text-secondary transition-all duration-200"
          >
            {credits}
          </a>
        </div>
      </main>
    </div>
  );
}

const headers = {
  Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAOOIdAEAAAAAX1glYT8gJk%2FhCgNKS0rioot%2F140%3DIDGbmPq2jjz9F1d55HlzpgztNDrx1cd6YXiTLV8b2wgcO8J65q`,
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.twitter.com/2/tweets/1375809527690317825?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
    { headers }
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
