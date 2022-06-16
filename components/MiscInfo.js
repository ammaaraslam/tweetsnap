import { FaGem } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import RoundedButton from "./RoundedButton";
import { BsTwitter } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
const MiscInfo = () => {
  const [showMiscInfoModal, setShowMiscInfoModal] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowMiscInfoModal(true)}
        className="p-2 text-2xl rounded-xl text-primary border-2 border-primary hover:text-light dark:hover:text-dark hover:bg-primary transition-all duration-300 ease-in-out"
      >
        <FaGem />
      </button>
      {showMiscInfoModal ? (
        <MiscInfoModal showModal={setShowMiscInfoModal} />
      ) : null}
    </>
  );
};

export default MiscInfo;

const MiscInfoModal = ({ showModal }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
        <div className="bg-textLight dark:bg-textDark md:w-3/5 md:h-fit p-5 rounded-3xl">
          <button
            type="button"
            onClick={() => showModal(false)}
            className="float-right p-1 text-2xl rounded-xl text-secondary border-2 border-secondary hover:text-dark hover:bg-secondary transition-all duration-300 ease-in-out"
          >
            <IoClose />
          </button>
          <div className="p-2 mt-3">
            <div className="flex justify-center ml-auto mr-auto p-2 text-5xl font-extrabold text-center font-poppins">
              <h1>
                <span className="bg-gradient-to-l from-primary to-secondary bg-no-repeat bg-[length:100%_0.8rem] bg-[0_88%] hover:bg-[length:100%_85%] focus:bg-[length:100%_85%] transition-all duration-300">
                  Useful Links
                </span>
              </h1>
            </div>
            <div className="pt-1 pb-0 text-xl font-bold text-center">
              TweetSnap is proudly built with{" "}
              <a
                href="https://github.com/ammaaraslam/tweetsnap/issues/new?assignees=&labels=&template=bug_report.md&title="
                target="_blank"
                rel="noreferrer"
                className="inline-flex underline decoration-secondary dark:hover:text-secondary hover:text-secondary transition-all duration-150"
              >
                NextJS
              </a>{" "}
              &{" "}
              <a
                href="https://github.com/ammaaraslam/tweetsnap/issues/new?assignees=&labels=&template=bug_report.md&title="
                target="_blank"
                rel="noreferrer"
                className="inline-flex underline decoration-secondary dark:hover:text-secondary hover:text-secondary transition-all duration-150"
              >
                TailwindCSS
              </a>{" "}
              and hosted on{" "}
              <a
                href="https://github.com/ammaaraslam/tweetsnap/issues/new?assignees=&labels=&template=bug_report.md&title="
                target="_blank"
                rel="noreferrer"
                className="inline-flex underline decoration-secondary dark:hover:text-secondary hover:text-secondary transition-all duration-150"
              >
                Vercel
              </a>{" "}
            </div>
            <div className="ml-auto mr-auto p-2 text-2xl font-semibold text-left">
              <p className="text-textSDark dark:text-textS p-1">
                - Found a bug?{" "}
                <a
                  href="https://github.com/ammaaraslam/tweetsnap/issues/new?assignees=&labels=&template=bug_report.md&title="
                  target="_blank"
                  rel="noreferrer"
                  className="text-textSDark dark:text-textS inline-flex underline decoration-primary dark:hover:text-primary hover:text-primary transition-all duration-150 italic"
                >
                  Create an issue on Github
                  <FiExternalLink className="text-xl mt-2 ml-1" />
                </a>
              </p>
              <p className="text-textSDark dark:text-textS p-1">
                - Want a new feature?{" "}
                <a
                  href="https://github.com/ammaaraslam/tweetsnap/issues/new?assignees=&labels=&template=feature_request.md&title="
                  target="_blank"
                  without
                  rel="noreferrer"
                  className="text-textSDark dark:text-textS inline-flex underline decoration-primary dark:hover:text-primary hover:text-primary transition-all duration-150 italic"
                >
                  Create a request on GitHub
                  <FiExternalLink className="text-xl mt-2 ml-1" />
                </a>
              </p>
              <p className="text-textSDark dark:text-textS p-1">
                - Enjoyed using this tool?{" "}
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20out%20https%3A//tweetsnap.vercel.app/%20by%20@itsammaar_7"
                  target="_blank"
                  without
                  rel="noreferrer"
                  className="text-textSDark dark:text-textS inline-flex underline decoration-primary dark:hover:text-primary hover:text-primary transition-all duration-150 italic"
                >
                  Spread the word on Twitter
                  <FiExternalLink className="text-xl mt-2 ml-1" />
                </a>
              </p>
              <p className="text-textSDark dark:text-textS p-1">
                - TweetSnap is posted on ProductHunt!{" "}
                <a
                  href="https://www.producthunt.com/posts/tweetsnap"
                  target="_blank"
                  without
                  rel="noreferrer"
                  className="text-textSDark dark:text-textS inline-flex underline decoration-primary dark:hover:text-primary hover:text-primary transition-all duration-150 italic"
                >
                  You can share your thoughts over there too!!
                  <FiExternalLink className="text-xl mt-2 ml-1" />
                </a>
              </p>
              <p className="text-textSDark dark:text-textS p-1">
                - Let&apos;s improve TweetSnap together 🙌{" "}
                <a
                  href="https://github.com/ammaaraslam/tweetsnap"
                  target="_blank"
                  without
                  rel="noreferrer"
                  className="text-textSDark dark:text-textS inline-flex underline decoration-primary dark:hover:text-primary hover:text-primary transition-all duration-150 italic"
                >
                  Check out the repo for TweetSnap on GitHub
                  <FiExternalLink className="text-xl mt-2 ml-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
