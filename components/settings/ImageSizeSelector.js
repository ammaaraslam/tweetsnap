import { PopoverBtns, PopoverBtnText } from "../Popover";

import { IoLogoWhatsapp, IoIosDesktop } from "react-icons/io5";
import { useState } from "react";

import {
  BsPhoneLandscape,
  BsPhone,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

export const ImageSizeSelector = ({ props }) => {
  const defaultWidth = "1350px";
  const defaultHeight = "1080px";
  const defailtLandscapeWidth = "1080px";
  const defaultLandscapeHeight = "1350px";

  const igPostWidth = "1080px";
  const igPostHeight = "1350px";
  const igStoryWidth = "1080px";
  const igStoryHeight = "1920px";
  const fbPostWidth = "1200px";
  const fbPostHeight = "630px";
  const fbStoryWidth = "1080px";
  const fbStoryHeight = "1920px";
  const waStatusWidth = "1080px";
  const waStatusHeight = "1920px";

  const [wValue, setWValue] = useState(defaultWidth);
  const [hValue, setHValue] = useState(defaultHeight);

  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.5);
            props.setScale(value);
          }}
        >
          <BsPhone className="ml-auto mr-auto" />
          <PopoverBtnText>Default</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.75);
            props.setScale(value);
          }}
        >
          <BsPhoneLandscape className="ml-auto mr-auto" />
          <PopoverBtnText>Landscape</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(1);
            props.setScale(value);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(1.5);
            props.setScale(value);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Story</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(1.75);
            props.setScale(value);
          }}
        >
          <BsFacebook className="ml-auto mr-auto" />
          <PopoverBtnText>Facebook Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <IoLogoWhatsapp className="ml-auto mr-auto" />
          <PopoverBtnText>Whatsapp Status</PopoverBtnText>
        </PopoverBtns>
      </div>
    </div>
  );
};
