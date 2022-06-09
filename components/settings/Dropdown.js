import React from "react";

const Dropdown = ({ dropdownItems }) => {
  return (
    <div>
      <ul>
        {dropdownItems.map((dropdownItem) => (
          <li key={Math.random()}>{dropdownItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
