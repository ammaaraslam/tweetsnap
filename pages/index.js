import ThemeToggle from "../components/ThemeToggle";
import { LogoChange } from "../components/LogoChange";
import Modal from "../components/Modal";
import Head from "next/head";
import Tweet from "../components/Tweet";
import Settings from "../components/Settings";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import { MdOutlineCamera } from "react-icons/md";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Home({ results }) {
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
  const [likeDisplay, setLikeDisplay] = useState("flex");
  const [retweetDisplay, setRetweetDisplay] = useState("show");
  const [sourceDisplay, setSourceDisplay] = useState("show");
  const [dateTimeDisplay, setDateTimeDisplay] = useState("show");
  const [replyDisplay, setReplyDisplay] = useState("show");

  const tweetRef = useRef(null);

  const convert = async (format) => {
    const node = tweetRef.current;
    const scale = 2;

    let dataUrl;

    const style = {
      transform: "scale(1.9)",
      transformOrigin: "top left",
      left: "0px",
    };

    const param = {
      quality: 1,
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,

      style,
    };

    switch (format) {
      case "png": {
        dataUrl = await domtoimage.toPng(node, param);
        saveAs(dataUrl, `${new Date().toJSON()}.${format}`);
        return;
      }

      case "jpeg": {
        dataUrl = await domtoimage.toJpeg(node, param);
        saveAs(dataUrl, `${new Date().toJSON()}.${format}`);
        return;
      }

      case "svg": {
        dataUrl = await domtoimage.toSvg(node, param);
        saveAs(dataUrl, `${new Date().toJSON()}.${format}`);
        return;
      }
    }
  };

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
    convert,
  };
  const [ID, setID] = useState(" ");

  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const url = searchInputRef.current.value;
    if (!url) return;
    const id = url.split("/")[5];
    router.push(`/?term=${id}`);
  }
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

      <main className="w-full md:h-screen h-fit bg-light dark:bg-dark overflow-auto transition-all duration-300 fonts">
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
        <form
          onSubmit={onSubmit}
          className="mb-0 mt-4 w-3/4 md:w-1/2 ml-auto mr-auto md:-mt-11"
        >
          <label className="hidden" for="search-form">
            Search
          </label>
          <input
            ref={searchInputRef}
            className="h-12 font-medium text-secondary pl-2 pr-16 outline-none bg-text dark:bg-textDark border-2 border-textS dark:border-textSDark rounded-2xl w-full placeholder:text-secondary placeholder:mt-auto placeholder:mb-auto dark:placeholder:text-secondary focus:bg-textS dark:focus:bg-textSDark transition-all duration-200"
            placeholder="Paste/Enter Link to you Tweet"
            type="text"
          />
          <button
            type="submit"
            onClick={search}
            className="p-2 font-medium w-16 h-12 items-center text-center text-secondary hover:text-textLight dark:hover:text-textDark  bg-textLight dark:bg-textDark border-2 border-secondary dark:border-secondary  hover:bg-secondary dark:hover:bg-secondary absolute rounded-2xl -translate-x-16 transition-all duration-200"
          >
            <MdOutlineCamera className="ml-auto mr-auto text-2xl" />
          </button>
        </form>
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
            name={results.includes.users[0].name}
            username={results.includes.users[0].username}
            verified={results.includes.users[0].verified}
            profileImageUrl={results.includes.users[0].profile_image_url}
            text={results.data.text}
            source={results.data.source}
            likeCount={results.data.public_metrics.like_count}
            replyCount={results.data.public_metrics.reply_count}
            retweetCount={results.data.public_metrics.retweet_count}
            dateTime={results.data.created_at}
            tweetURLs={results.data?.entities?.urls}
            tweetImages={results.includes.media}
            image={
              results.includes?.media ? results.includes.media[0].url : null
            }
            tweetRef={tweetRef}
          />
          <Settings props={propsForSettings} />
        </div>
        {/* Footer */}
        <div className="absolute bottom-1 inline-flex p-2 w-full justify-center items-center">
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
//     `https://api.twitter.com/2/tweets/1475915874091606021?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
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

export async function getServerSideProps(context) {
  const headers = {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAOOIdAEAAAAAX1glYT8gJk%2FhCgNKS0rioot%2F140%3DIDGbmPq2jjz9F1d55HlzpgztNDrx1cd6YXiTLV8b2wgcO8J65q`,
  };

  const res = await fetch(
    `https://api.twitter.com/2/tweets/${context.query.term}?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
    { headers }
  );
  const initialRes = await fetch(
    `https://api.twitter.com/2/tweets/1475915874091606021?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
    { headers }
  );

  if (!context.query.term) {
    const results = await initialRes.json();
    return {
      props: {
        results,
      },
    };
  } else {
    const results = await res.json();
    return {
      props: {
        results,
      },
    };
  }
}
