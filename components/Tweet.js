import { MdVerified } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import format from "date-fns/format";
import { CgSpinner } from "react-icons/cg";
import React from "react";

const Loading = ({ loaderBG }) => {
  if (loaderBG == "#000000") {
    return (
      <div className="md:w-5/6 md:h-fit w-11/12 h-fit rounded-3xl md:p-4 p-3 mt-auto mb-auto font-robotoCondensed bg-dark">
        <div className="animate-pulse">
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 bg-textSDark"></div>
            <div className="flex flex-col ml-2">
              <div className="flex items-center font-bold leading-5 w-36 h-4 font-sans bg-textSDark"></div>
              <div className="text-grey font-normal w-28 h-3 mt-1 bg-textSDark"></div>
            </div>
            <a className="ml-auto">
              <FaTwitter className="-mt-2 text-grey text-xl" />
            </a>
          </div>
          <div className="mt-4 mb-2 leading-normal whitespace-pre-wrap bg-textSDark font-normal font-serif w-full h-44"></div>
          <div className="text-grey  mt-3 mb-1">
            <div className="w-32 h-4 bg-textSDark inline-flex"></div>
            <span className="ml-1 mr-1">•</span>
            <div className="w-32 h-4 bg-textSDark inline-flex"></div>
          </div>
          <div className="mt-1">
            <div className="w-28 h-4 mr-2 bg-textSDark inline-flex"></div>
            <div className="w-28 h-4 mr-2 bg-textSDark inline-flex"></div>
            <div className="w-28 h-4 mr-2 bg-textSDark inline-flex"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="md:w-5/6 md:h-fit w-11/12 h-fit rounded-3xl md:p-4 p-3 mt-auto mb-auto font-robotoCondensed bg-light">
        <div className="animate-pulse">
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 bg-textS"></div>
            <div className="flex flex-col ml-2">
              <div className="flex items-center font-bold leading-5 w-36 h-4 font-sans bg-textS"></div>
              <div className="bg-textS font-normal w-28 h-3 mt-1"></div>
            </div>
            <a className="ml-auto">
              <FaTwitter className="-mt-2 text-lightGrey text-xl" />
            </a>
          </div>
          <div className="mt-4 mb-2 leading-normal whitespace-pre-wrap bg-textS font-normal font-serif w-full h-44"></div>
          <div className="text-lightGrey  mt-3 mb-1">
            <div className="w-32 h-4 bg-textS inline-flex"></div>
            <span className="ml-1 mr-1">•</span>
            <div className="w-32 h-4 bg-textS inline-flex"></div>
          </div>
          <div className="mt-1">
            <div className="w-28 h-4 mr-2 bg-textS inline-flex"></div>
            <div className="w-28 h-4 mr-2 bg-textS inline-flex"></div>
            <div className="w-28 h-4 mr-2 bg-textS inline-flex"></div>
          </div>
        </div>
      </div>
    );
  }
};

const Tweet = ({
  bg,
  cardColor,
  width,
  height,
  cardContentSize,
  cardFontColor,
  likeDisplay,
  retweetDisplay,
  replyDisplay,
  dateTimeDisplay,
  sourceDisplay,
  name,
  username,
  verified,
  profileImageUrl,
  text,
  source,
  likeCount,
  replyCount,
  retweetCount,
  dateTime,
  tweetURLs,
  image,
  tweetRef,
  isLoading,
  tweetID,
}) => {
  const urls = tweetURLs;

  let tweetText = text;

  tweetText = tweetText.replace("&amp;", "&");
  const newDateTime = new Date(dateTime);
  return (
    <div className=" mx-auto">
      <div ref={tweetRef} className=" flex">
        <div
          className=" rounded-3xl flex justify-center items-center md:scale-100 scale-95 overflow-hidden pt-8 pb-8"
          style={{ background: bg, width: width, height: height }}
        >
          {isLoading ? (
            <Loading loaderBG={cardColor} />
          ) : (
            <div
              className="md:w-5/6 md:h-fit w-11/12 h-fit rounded-3xl md:p-4 p-3 mt-auto mb-auto font-robotoCondensed"
              style={{
                background: cardColor,
                fontSize: cardContentSize,
                color: cardFontColor,
              }}
            >
              <div className="flex items-center">
                <a
                  className="flex mr-3"
                  href={`https://twitter.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={name}
                    src={profileImageUrl}
                    className="rounded-full w-full h-full"
                  />
                </a>
                <a
                  href={`https://twitter.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col ml-0"
                >
                  <span
                    className="flex items-center font-bold leading-5  font-sans"
                    title={name}
                  >
                    {name}
                    {verified && <MdVerified className="mt-1 ml-1" />}
                  </span>
                  <span className="text-grey font-normal ">@{username}</span>
                </a>
                <a
                  className="ml-auto"
                  href={`https://twitter.com/${username}/status/${tweetID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="-mt-5 " />
                </a>
              </div>
              <div className="mt-4 mb-2 leading-normal whitespace-pre-wrap  font-normal font-serif">
                {tweetText.split(" ").map((str) => {
                  if (str.startsWith("#")) {
                    const hashtag = str.slice(1);
                    return (
                      <a
                        href={`https://twitter.com/hashtag/${hashtag}?src=hashtag_click/`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        {str}{" "}
                      </a>
                    );
                  }
                  if (str.startsWith("@")) {
                    const mention = str.slice(1);
                    return (
                      <a
                        href={`https://twitter.com/${mention}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        {str}{" "}
                      </a>
                    );
                  }
                  if (str.startsWith("http") || str.startsWith("https")) {
                    const url = str;
                    return (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        {str}{" "}
                      </a>
                    );
                  }

                  return str + " ";
                })}
              </div>
              <div className="w-full h-3/4">
                {image && <img src={image} className="mt-2 rounded-2xl" />}
              </div>

              <div className="text-grey  mt-3 mb-1">
                <a
                  className=" hover:underline font-sans"
                  href={`https://twitter.com/${username}/status/${tweetID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: dateTimeDisplay }}
                >
                  {newDateTime && format(newDateTime, "h:mm a - LLL d, yyyy ")}
                </a>

                <span className="ml-1 mr-1">
                  {dateTimeDisplay == "inline-flex" &&
                  sourceDisplay == "inline-flex"
                    ? "•"
                    : ""}
                </span>
                <a
                  className=" hover:underline"
                  href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: sourceDisplay }}
                >
                  {source}
                </a>
              </div>
              <div className="flex mt-1">
                <a
                  className="items-center mr-3  transition hover:underline"
                  href={`https://twitter.com/${username}/status/${tweetID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: replyDisplay }}
                >
                  <span>{replyCount}</span>
                  <span className="text-grey ml-1">Replies</span>
                </a>
                <a
                  className="items-center mr-3 transition hover:underline"
                  href={`https://twitter.com/${username}/status/${tweetID}/retweets`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: retweetDisplay }}
                >
                  <span>{retweetCount}</span>
                  <span className="text-grey ml-1">Retweets</span>
                </a>
                <a
                  className="items-center hover:text-red-600 transition hover:underline"
                  href={`https://twitter.com/${username}/status/${tweetID}/likes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: likeDisplay }}
                >
                  <span>{likeCount}</span>
                  <span className="text-grey ml-1">Likes</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
