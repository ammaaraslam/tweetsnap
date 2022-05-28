import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import RoundedButton from "./RoundedButton";
import { BsTwitter } from "react-icons/bs";
import { FiShare } from "react-icons/fi";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showModal ? (
        <>
          {/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
            {/* <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className=" flex justify-center items-center absolute top-8 r-0 bg-transparent text-black"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                    <IoClose />
                  </span>
                </button>
                <div className="text-center">
                  <p>
                    bwfqwfbqfbqiwb lorem aafadfadvgsdsn gs n
                    nngwgwisrngkswbgwksbrgk wjn oqe joqijeoqijeoq
                    qoewfqoefqefqofqnefnqnefqnfqinwfqjanfqjanfjkqanefqjaefjkqanefq
                    ejnqebnfaebfoqaebfqoaibfuqebfqiebfqiaebfqiebfiqebfqiebfqebfiqbeibfqibfqiebfibewuibwfqwfbqfbqiwb
                  </p>
                </div>
              </div>
            </div> */}
            <div className="bg-textLight dark:bg-textDark md:w-1/2 md:h-1/2 p-5 rounded-3xl">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="float-right p-1 text-2xl rounded-xl text-secondary border-2 border-secondary hover:text-dark hover:bg-secondary transition-all duration-200 ease-in-out"
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
                      @itsammaar_7
                    </a>{" "}
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
