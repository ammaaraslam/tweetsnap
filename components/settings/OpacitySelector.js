import { useState } from "react";
import { PopoverBtns, PopoverBtnText } from "../Popover";

export default function OpacitySelector({ props }) {
  const [value, setValue] = useState(1);

  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(1);
            props.setOpacity(value);
          }}
        >
          1x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.9);
            props.setOpacity(value);
          }}
        >
          0.9x
        </PopoverBtns>
      </div>

      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.8);
            props.setOpacity(value);
          }}
        >
          0.8x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.7);
            props.setOpacity(value);
          }}
        >
          0.7x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.6);
            props.setOpacity(value);
          }}
        >
          0.6x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.5);
            props.setOpacity(value);
          }}
        >
          0.5x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.4);
            props.setOpacity(value);
          }}
        >
          0.4x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.3);
            props.setOpacity(value);
          }}
        >
          0.3x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.2);
            props.setOpacity(value);
          }}
        >
          0.2x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0.1);
            props.setOpacity(value);
          }}
        >
          0.1x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            setValue(0);
            props.setOpacity(value);
          }}
        >
          0x
        </PopoverBtns>
      </div>
    </div>
  );
}
