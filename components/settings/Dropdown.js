import React from "react";

const Dropdown = ({ dropdownItems, props }) => {
  return (
    <div className="bg-textSDark dark:bg-textS rounded-xl mt-1 p-0 absolute w-downloadDropdown">
      <ul className="rounded-xl">
        {dropdownItems.map((dropdownItem) => (
          <li
            className="p-2 text-center font-semibold text-textS dark:text-textSDark  hover:bg-secondary transition-colors duration-150 hover:cursor-pointer first-of-type:rounded-t-xl last-of-type:rounded-b-xl uppercase"
            key={Math.random()}
            onClick={() => {
              props.setDownloading(true);
              props.convert(dropdownItem);
            }}
          >
            {dropdownItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
