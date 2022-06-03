export const Popover = ({ position, useRef, children }) => {
  if (position == "top") {
    return (
      <div
        ref={useRef}
        className="absolute z-20 w-11/12 md:w-72 h-16 bg-textSDark dark:bg-textS text-center text-sm rounded-3xl md:right-[6.5%] ml-auto mr-auto top-[53.5%] md:top-[14%] p-2"
      >
        {children}
      </div>
    );
  }
  if (position == "left") {
    return (
      <div
        ref={useRef}
        className="absolute z-20 md:w-16 md:h-fit w-11/12 h-16 bg-textSDark dark:bg-textS text-center text-sm rounded-3xl md:right-[30.5%] md:top-[22.5%] ml-auto mr-auto top-[53.5%]"
      >
        {children}
      </div>
    );
  }
  if (position == "right") {
    return (
      <div
        ref={useRef}
        className="absolute z-20 md:w-20 md:h-fit w-11/12 h-16 bg-textSDark dark:bg-textS text-center text-sm rounded-3xl md:right-[0.5%] md:top-[22.5%] ml-auto mr-auto  top-[53.5%]"
      >
        {children}
      </div>
    );
  }
};

export const PopoverBtns = ({ handleOnClick, children }) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`p-2 md:text-xl text-lg font-semibold rounded-2xl min-w-3 max-w-3 text-center text-textS  hover:text-textSDark  hover:bg-textS dark:hover:bg-textSDark dark:text-textSDark dark:hover:text-textS  transition-all duration-200 break-words`}
    >
      {children}
    </button>
  );
};
export const PopoverBtnText = ({ children }) => {
  return <p className={`p-0 text-xs font-medium  break-words`}>{children}</p>;
};
