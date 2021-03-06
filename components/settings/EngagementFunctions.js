import { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdTripOrigin } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

import { PopoverBtns, PopoverBtnText } from "../Popover";

export const ShowLikes = ({ props }) => {
  const show = "flex";
  const hide = "none";
  const currentDisplay = props.likeDisplay;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setLikeDisplay(hide);
          }}
        >
          <IoIosHeart className="ml-auto mr-auto text-secondary" />
          <PopoverBtnText>Likes</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          props.setLikeDisplay(show);
        }}
      >
        <IoIosHeart className="ml-auto mr-auto" />
        <PopoverBtnText>Likes</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};

export const ShowRetweets = ({ props }) => {
  const show = "flex";
  const hide = "none";

  const currentDisplay = props.retweetDisplay;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setRetweetDisplay(hide);
          }}
        >
          <AiOutlineRetweet className="ml-auto mr-auto text-secondary" />
          <PopoverBtnText>Retweets</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          props.setRetweetDisplay(show);
        }}
      >
        <AiOutlineRetweet className="ml-auto mr-auto" />
        <PopoverBtnText>Retweets</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};

export const ShowDateTime = ({ props }) => {
  const show = "inline-flex";
  const hide = "none";

  const currentDisplay = props.dateTimeDisplay;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setDateTimeDisplay(hide);
          }}
        >
          <BsClockFill className="ml-auto mr-auto text-secondary" />
          <PopoverBtnText>Date/Time</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          props.setDateTimeDisplay(show);
        }}
      >
        <BsClockFill className="ml-auto mr-auto" />
        <PopoverBtnText>Date/Time</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};

export const ShowSource = ({ props }) => {
  const show = "inline-flex";
  const hide = "none";

  const currentDisplay = props.sourceDisplay;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setSourceDisplay(hide);
          }}
        >
          <MdTripOrigin className="ml-auto mr-auto text-secondary" />
          <PopoverBtnText>Source</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          props.setSourceDisplay(show);
        }}
      >
        <MdTripOrigin className="ml-auto mr-auto" />
        <PopoverBtnText>Source</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};

export const ShowReplies = ({ props }) => {
  const show = "flex";
  const hide = "none";

  const currentDisplay = props.replyDisplay;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setReplyDisplay(hide);
          }}
        >
          <FaRegComment className="ml-auto mr-auto text-secondary" />
          <PopoverBtnText>Replies</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          props.setReplyDisplay(show);
        }}
      >
        <FaRegComment className="ml-auto mr-auto" />
        <PopoverBtnText>Replies</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};
