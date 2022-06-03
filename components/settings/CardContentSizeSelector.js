import { PopoverBtns } from "../Popover";

export const CardContentSizeSelector = () => {
  return (
    <div className="p-2 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>1x</PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>2x</PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>3x</PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>4x</PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>5x</PopoverBtns>
      </div>
    </div>
  );
};
