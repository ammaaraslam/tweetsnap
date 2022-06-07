import { MdVerified } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import format from "date-fns/format";
import { CgSpinner } from "react-icons/cg";

const Loading = ({ loaderColor }) => {
  return (
    <div>
      <CgSpinner
        className="ml-auto mr-auto animate-spin text-6xl"
        style={{ color: loaderColor }}
      />
    </div>
  );
};

const Tweet = ({
  bg,
  cardColor,
  opacity,
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
  tweetImages,
  image,
  tweetRef,
  isLoading,
}) => {
  const urls = tweetURLs;

  let tweetText = text;

  tweetText = tweetText.replace("&amp;", "&");
  const newDateTime = new Date(dateTime);
  return (
    <div ref={tweetRef} className="ml-auto mr-auto flex">
      <div
        className="ml-auto mr-auto md:ml-20 rounded-3xl flex justify-center items-center md:scale-100 scale-95 overflow-auto pt-8 pb-8"
        style={{ background: bg, width: width, height: height }}
      >
        {isLoading ? (
          <Loading loaderColor={cardColor} />
        ) : (
          <div
            class="md:w-5/6 md:h-fit w-11/12 h-fit rounded-3xl md:p-4 p-3 mt-auto mb-auto font-robotoCondensed"
            style={{
              background: cardColor,
              opacity: opacity,
              fontSize: cardContentSize,
              color: cardFontColor,
            }}
          >
            <div class="flex items-center">
              <a
                class="flex mr-3"
                href={`https://twitter.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={name}
                  src={profileImageUrl}
                  class="rounded-full w-full h-full"
                />
              </a>
              <a
                href={`https://twitter.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col ml-0"
              >
                <span
                  class="flex items-center font-bold leading-5  font-sans"
                  title={name}
                >
                  {name}
                  {verified && <MdVerified className="mt-1 ml-1" />}
                </span>
                <span className="text-grey font-normal ">@{username}</span>
              </a>
              <a
                class="ml-auto"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="-mt-5 " />
              </a>
            </div>
            <div class="mt-4 mb-2 leading-normal whitespace-pre-wrap  font-normal font-serif">
              {tweetText.split(" ").map((str) => {
                if (str.startsWith("#")) {
                  const hashtag = str.slice(1);
                  return (
                    <a
                      href={`https://twitter.com/hashtag/${hashtag}?src=hashtag_click/`}
                      target="_blank"
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
                      className="text-primary"
                    >
                      {str}{" "}
                    </a>
                  );
                }
                if (str.startsWith("http") || str.startsWith("https")) {
                  const url = str;
                  return (
                    <a href={url} target="_blank" className="text-primary">
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
                class=" hover:underline font-sans"
                href="https://twitter.com/naval/status/1002104154737684480"
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
                class=" hover:underline"
                href="https://twitter.com/naval/status/1002104154737684480"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: sourceDisplay }}
              >
                {source}
              </a>
            </div>
            <div class="flex mt-1">
              <a
                className="items-center mr-3  transition hover:underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: replyDisplay }}
              >
                <span>{replyCount}</span>
                <span className="text-grey ml-1">Replies</span>
              </a>
              <a
                className="items-center mr-3 transition hover:underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: retweetDisplay }}
              >
                <span>{retweetCount}</span>
                <span className="text-grey ml-1">Retweets</span>
              </a>
              <a
                className="items-center hover:text-red-600 transition hover:underline"
                href="#"
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
  );
};

export default Tweet;
