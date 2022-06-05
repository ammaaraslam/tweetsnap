import { useState } from "react";
import { IoIosHeart, IoMdHeartDislike } from "react-icons/io";
import { PopoverBtns, PopoverBtnText } from "../Popover";

export const ShowLikes = ({ props }) => {
  const show = "flex";
  const hide = "none";

  const [display, setDisplay] = useState(show);

  const currentDisplay = display;
  if (currentDisplay == show) {
    return (
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setDisplay(hide);
            props.setLikeDisplay(display);
          }}
        >
          <IoIosHeart className="ml-auto mr-auto" />
          <PopoverBtnText>Likes</PopoverBtnText>
        </PopoverBtns>
      </div>
    );
  }
  return (
    <div className="md:mb-2 md:ml-0 ml-2">
      <PopoverBtns
        handleOnClick={() => {
          setDisplay(show);
          props.setLikeDisplay(display);
        }}
      >
        <IoMdHeartDislike className="ml-auto mr-auto" />
        <PopoverBtnText>Likes</PopoverBtnText>
      </PopoverBtns>
    </div>
  );
};
