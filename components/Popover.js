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
        className="absolute z-20 md:w-16 md:h-72 w-11/12 h-16 bg-textSDark dark:bg-textS text-center text-sm rounded-3xl md:right-[30.5%] md:top-[30%] ml-auto mr-auto top-[53.5%]"
      >
        {children}
      </div>
    );
  }
  if (position == "right") {
    return (
      <div
        ref={useRef}
        className="absolute z-20 md:w-16 md:h-72 w-11/12 h-16 bg-textSDark dark:bg-textS text-center text-sm rounded-3xl md:right-[0.5%] md:top-[30%] ml-auto mr-auto  top-[53.5%]"
      >
        {children}
      </div>
    );
  }
};
