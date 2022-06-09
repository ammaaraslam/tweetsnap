import React from "react";

const Dropdown = ({ dropdownItems }) => {
  return (
    <div className="bg-textSDark dark:bg-textS rounded-xl mt-1 p-0 absolute w-downloadDropdown">
      <ul className="rounded-xl">
        {dropdownItems.map((dropdownItem) => (
          <li
            className="p-2 text-center font-semibold text-textS dark:text-textSDark  hover:bg-secondary transition-colors duration-150 hover:cursor-pointer first-of-type:rounded-t-xl last-of-type:rounded-b-xl "
            key={Math.random()}
          >
            {dropdownItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
