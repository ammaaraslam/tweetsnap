import React from "react";

function Tooltip({ children, tooltipText }) {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginTop = "10px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginTop = "0";
  }
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap bg-primary from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150 -left-1/3 w-24"
        style={{ top: "100%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-black h-3 w-2 absolute"
          style={{ transform: "rotate(45deg)" }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}

export default Tooltip;
