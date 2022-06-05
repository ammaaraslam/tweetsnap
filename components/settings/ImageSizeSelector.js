import { PopoverBtns, PopoverBtnText } from "../Popover";

import { IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";

import { BsPhone, BsFacebook, BsInstagram } from "react-icons/bs";

export const ImageSizeSelector = ({ props }) => {
  const defaultWidth = "625px";
  const defaultHeight = "410px";

  const igPostWidth = "500px";
  const igPostHeight = "650px";
  const igPostMobileWidth = "150px";
  const igPostMobileHeight = "160px";

  const igStoryWidth = "525px";
  const igStoryHeight = "675px";
  const fbPostWidth = "500px";
  const fbPostHeight = "650px";
  const waStatusWidth = "525px";
  const waStatusHeight = "675px";

  const [wValue, setWValue] = useState(defaultWidth);
  const [hValue, setHValue] = useState(defaultHeight);

  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setWValue(defaultWidth);
            props.setWidth(wValue);
            setHValue(defaultHeight);
            props.setHeight(hValue);
          }}
        >
          <BsPhone className="ml-auto mr-auto" />
          <PopoverBtnText>Default</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setWValue(igPostWidth);
            props.setWidth(wValue);
            setHValue(igPostHeight);
            props.setHeight(hValue);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setWValue(igStoryWidth);
            props.setWidth(wValue);
            setHValue(igStoryHeight);
            props.setHeight(hValue);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Story</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setWValue(fbPostWidth);
            props.setWidth(wValue);
            setHValue(fbPostHeight);
            props.setHeight(hValue);
          }}
        >
          <BsFacebook className="ml-auto mr-auto" />
          <PopoverBtnText>Facebook Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setWValue(waStatusWidth);
            props.setWidth(wValue);
            setHValue(waStatusHeight);
            props.setHeight(hValue);
          }}
        >
          <IoLogoWhatsapp className="ml-auto mr-auto" />
          <PopoverBtnText>Whatsapp Status</PopoverBtnText>
        </PopoverBtns>
      </div>
    </div>
  );
};
