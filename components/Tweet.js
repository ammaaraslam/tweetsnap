import { MdVerified } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

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
  urls,
  tweetImages,
  isTweetImages,
}) => {
  const linkregex = /(https?:\/\/[^\s]+)/g;
  const link_occurs = text.match(linkregex);

  if (urls && tweetImages) {
    text = text.replace(
      text.slice(urls[urls.length - 1].start, urls[urls.length - 1].end + 1),
      ""
    );
  }

  link_occurs?.forEach((link, i) => {
    if (!tweetImages) {
      const corres_url = urls[i];
      text = text.replace(
        text.slice(corres_url.start, corres_url.end),
        corres_url.expanded_url
      );
    } else {
      if (i === link_occurs.length - 1) {
        return;
      } else {
        const corres_url = urls[i];
        text = text.replace(
          text.slice(corres_url.start, corres_url.end),
          corres_url.expanded_url
        );
      }
    }
  });

  text = text.replace("&amp;", "&");
  return (
    <div
      className="ml-auto mr-auto md:ml-20 rounded-3xl flex justify-center items-center md:scale-100 scale-50"
      style={{ background: bg, width: width, height: height }}
    >
      <div
        class="md:w-5/6 md:h-fit w-5/6 h-fit rounded-3xl p-4"
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
            <Image
              alt={name}
              width={60}
              height={60}
              src={profileImageUrl}
              class="rounded-full"
            />
          </a>
          <a
            href={`https://twitter.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ml-0"
          >
            <span
              class="flex items-center font-bold leading-5 text-xl"
              title={name}
            >
              {name}
              <MdVerified className="mt-1" />
            </span>
            <span className="text-grey font-normal text-lg">{username}</span>
          </a>
          <a
            class="ml-auto"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="-mt-5 text-xl" />
          </a>
        </div>
        <div class="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg font-normal">
          {text}
        </div>
        {isTweetImages && <Image src={isTweetImages} mt="2" fit="cover" />}

        <div className="text-grey text-base mt-3 mb-1">
          <a
            class=" hover:underline"
            href="https://twitter.com/naval/status/1002104154737684480"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: dateTimeDisplay }}
          >
            {dateTime}
          </a>

          <span className="ml-1">
            {dateTimeDisplay == "inline-flex" && sourceDisplay == "inline-flex"
              ? "•"
              : ""}
          </span>
          <a
            class=" hover:underline ml-1"
            href="https://twitter.com/naval/status/1002104154737684480"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: sourceDisplay }}
          >
            {source}
          </a>
        </div>
        <div class="flex mt-1 font-normal text-base">
          <a
            className="items-center mr-4 hover:text-blue-600 transition hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: replyDisplay }}
          >
            <span>{replyCount}</span>
            <span className="text-grey ml-1">Replies</span>
          </a>
          <a
            className="items-center mr-4 hover:text-green-600 transition hover:underline"
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
    </div>
  );
};

export default Tweet;
