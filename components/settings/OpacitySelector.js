import { PopoverBtns } from "../Popover";

export default function OpacitySelector({ props }) {
  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(1);
          }}
        >
          1x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.9);
          }}
        >
          0.9x
        </PopoverBtns>
      </div>

      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.8);
          }}
        >
          0.8x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.7);
          }}
        >
          0.7x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.6);
          }}
        >
          0.6x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.5);
          }}
        >
          0.5x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.4);
          }}
        >
          0.4x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.3);
          }}
        >
          0.3x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.2);
          }}
        >
          0.2x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0.1);
          }}
        >
          0.1x
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns
          handleOnClick={() => {
            props.setOpacity(0);
          }}
        >
          0x
        </PopoverBtns>
      </div>
    </div>
  );
}
