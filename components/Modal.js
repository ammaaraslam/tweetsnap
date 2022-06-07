import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import RoundedButton from "./RoundedButton";
import { BsTwitter } from "react-icons/bs";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
            <div className="bg-textLight dark:bg-textDark md:w-1/2 md:h-1/2 p-5 rounded-3xl">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="float-right p-1 text-2xl rounded-xl text-secondary border-2 border-secondary hover:text-dark hover:bg-secondary transition-all duration-300 ease-in-out"
              >
                <IoClose />
              </button>
              <div className="p-3 mt-3">
                <div className="flex justify-center ml-auto mr-auto p-2 text-5xl font-extrabold text-center">
                  <h1>
                    Welcome to{" "}
                    <span className="bg-gradient-to-l from-primary to-secondary bg-no-repeat bg-[length:100%_0.8rem] bg-[0_88%] hover:bg-[length:100%_85%] focus:bg-[length:100%_85%] transition-all duration-300">
                      TweetSnap
                    </span>
                  </h1>
                </div>
                <div className="ml-auto mr-auto p-2 text-xl font-semibold text-left">
                  <p className="pb-2">
                    Hi! I'm Ammaar Aslam, the creator of this website. I hope
                    this tool helps you create a beautiful images from tweets.
                  </p>
                  <p>
                    If you find TweetSnap to be useful, consider following me on
                    twitter and sharing your valuable feedback{" "}
                    <a
                      href="https://twitter.com/itsammaar_7"
                      target="_blank"
                      className="text-primary"
                    >
                      @itsammaar_7{" "}
                    </a>
                    and let me know how I can improve this website.
                  </p>
                </div>
              </div>
              <div className="float-right -mt-3">
                <a href="https://twitter.com/itsammaar_7" target="_blank">
                  <RoundedButton>
                    Follow me
                    <BsTwitter className="ml-2" />
                  </RoundedButton>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
