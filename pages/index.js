import ThemeToggle from "../components/ThemeToggle";
import { LogoChange } from "../components/LogoChange";
import Modal from "../components/Modal";
import Head from "next/head";
import Tweet from "../components/Tweet";
import Settings from "../components/Settings";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const credits = "</> with 💙 by Ammaar Aslam";
  const [bg, setBg] = useState(
    "linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)"
  );
  const [cardColor, setCardColor] = useState("#FFFFFF");
  const [cardFontColor, setCardFontColor] = useState("#000000");

  const [opacity, setOpacity] = useState(1);
  const [width, setWidth] = useState("600px");
  const [height, setHeight] = useState("400px");
  const [cardContentSize, setCardContentSize] = useState("1.125rem");
  const [likeDisplay, setLikeDisplay] = useState("show");
  const [retweetDisplay, setRetweetDisplay] = useState("show");
  const [sourceDisplay, setSourceDisplay] = useState("show");
  const [dateTimeDisplay, setDateTimeDisplay] = useState("show");
  const [replyDisplay, setReplyDisplay] = useState("show");

  const propsForSettings = {
    bg,
    setBg,
    cardColor,
    setCardColor,
    opacity,
    setOpacity,
    width,
    setWidth,
    height,
    setHeight,
    cardContentSize,
    setCardContentSize,
    cardFontColor,
    setCardFontColor,
    likeDisplay,
    setLikeDisplay,
    retweetDisplay,
    setRetweetDisplay,
    sourceDisplay,
    setSourceDisplay,
    dateTimeDisplay,
    setDateTimeDisplay,
    replyDisplay,
    setReplyDisplay,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>TweetSnap</title>
        <meta name="description" content="TweetSnap" />
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
        <SearchBar onSubmit={onSubmit} />
        {/* Main Body */}
        <div className="w-full h-3/4 mt-7 md:flex items-center justify-between">
          <Tweet
            bg={bg}
            cardColor={cardColor}
            opacity={opacity}
            width={width}
            height={height}
            cardContentSize={cardContentSize}
            cardFontColor={cardFontColor}
            likeDisplay={likeDisplay}
            retweetDisplay={retweetDisplay}
            replyDisplay={replyDisplay}
            dateTimeDisplay={dateTimeDisplay}
            sourceDisplay={sourceDisplay}
          />
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

// export const getServerSideProps = async () => {
//   const fetchedTweet = await fetchNewTweet();
//   return { props: { fetchedTweet } };
// };

// export const getServerSideProps = async () => {
//   const headers = {
//     Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAOOIdAEAAAAAX1glYT8gJk%2FhCgNKS0rioot%2F140%3DIDGbmPq2jjz9F1d55HlzpgztNDrx1cd6YXiTLV8b2wgcO8J65q`,
//   };

//   const res = await fetch(
//     `https://api.twitter.com/2/tweets/1375809527690317825?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
//     { headers }
//   );
//   const initialTweet = await res.json();
//   //   // const res = await fetch(
//   //   //   `https://api.twitter.com/2/tweets/1375809527690317825?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
//   //   //   { headers }
//   //   // );
//   //   // const articles = await res.json();
//   return {
//     props: {
//       initialTweet,
//     },
//   };
// };
