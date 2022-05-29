import { PopoverBtns, PopoverBtnText } from "../Popover";

import { IoLogoWhatsapp, IoIosDesktop } from "react-icons/io5";

import {
  BsPhoneLandscape,
  BsPhone,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

export const ImageSizeSelector = () => {
  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <BsPhone className="ml-auto mr-auto" />
          <PopoverBtnText>Potrait</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <BsPhoneLandscape className="ml-auto mr-auto" />
          <PopoverBtnText>Landscape</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Post</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <BsInstagram className="ml-auto mr-auto" />
          <PopoverBtnText>Instagram Story</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
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
