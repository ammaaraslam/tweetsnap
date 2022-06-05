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
}) => {
  return (
    <div
      className="md:w-1/2 md:h-4/6 w-5/6 h-2/5 ml-auto mr-auto md:ml-20 rounded-3xl flex justify-center items-center"
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Naval"
              width={60}
              height={60}
              src="https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg"
              class="rounded-full"
            />
          </a>
          <a
            href="https://twitter.com/naval"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col ml-0"
          >
            <span
              class="flex items-center font-bold leading-5 text-xl"
              title="{author.name}"
            >
              TweetGuy
              <MdVerified className="mt-1" />
            </span>
            <span className="text-grey font-normal text-lg">@tweetguy</span>
          </a>
          <a
            class="ml-auto"
            href="https://twitter.com/naval"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="-mt-5 text-xl" />
          </a>
        </div>
        <div class="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg font-normal">
          Some thing something something something something.
        </div>
        <div className="text-grey text-base mt-3 mb-1">
          <a
            class=" hover:underline"
            href="https://twitter.com/naval/status/1002104154737684480"
            target="_blank"
            rel="noopener noreferrer"
          >
            8:27 AM - June 01, 2022
          </a>
          <span className="ml-1">•</span>
          <a
            class=" hover:underline ml-1"
            href="https://twitter.com/naval/status/1002104154737684480"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter for Web
          </a>
        </div>
        <div class="flex mt-1 font-normal text-base">
          <a
            className="flex items-center mr-4  hover:text-blue-600 transition hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>117</span>
            <span className="text-grey ml-1">Replies</span>
          </a>
          <a
            className="flex items-center mr-4 hover:text-green-600 transition hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>5,434</span>
            <span className="text-grey ml-1">Retweets</span>
          </a>
          <a
            className="flex items-center hover:text-red-600 transition hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>23,519</span>
            <span className="text-grey ml-1">Likes</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
