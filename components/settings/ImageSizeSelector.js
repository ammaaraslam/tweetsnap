import { PopoverBtns, PopoverBtnText } from "../Popover";

import { IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";

import { BsPhone, BsFacebook, BsInstagram } from "react-icons/bs";

export const ImageSizeSelector = ({ props }) => {
  const defaultWidth = "625px";
  const defaultHeight = "auto";

  const igPostWidth = "500px";
  const igPostHeight = "650px";
  const igStoryWidth = "525px";
  const igStoryHeight = "675px";
  const fbPostWidth = "500px";
  const fbPostHeight = "650px";
  const waStatusWidth = "525px";
  const waStatusHeight = "675px";

  return (
    <div className="p-2 flex md:flex-wrap flex-nowrap md:justify-center ml-auto mr-auto overflow-x-auto items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setWidth(defaultWidth);
            props.setHeight(defaultHeight);
          }}
        >
          <BsPhone className="ml-auto mr-auto" />
          <PopoverBtnText>Default</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setWidth(igPostWidth);
            props.setHeight(igPostHeight);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setWidth(igStoryWidth);
            props.setHeight(igStoryHeight);
          }}
        >
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Story</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setWidth(fbPostWidth);
            props.setHeight(fbPostHeight);
          }}
        >
          <BsFacebook className="ml-auto mr-auto" />
          <PopoverBtnText>Facebook Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setWidth(waStatusWidth);
            props.setHeight(waStatusHeight);
          }}
        >
          <IoLogoWhatsapp className="ml-auto mr-auto" />
          <PopoverBtnText>Whatsapp Status</PopoverBtnText>
        </PopoverBtns>
      </div>
    </div>
  );
};
