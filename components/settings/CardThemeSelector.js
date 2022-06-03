import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { SettingsBtnText } from "./Buttons";

import { useState } from "react";

const light = "#EBF7FF";
const dark = "#000C14";

const CardThemeSelector = ({ onClose, props }) => {
  const [theme, setTheme] = useState(light);
  const currentTheme = theme;

  if (currentTheme === light) {
    return (
      <button
        type="button"
        onClick={() => {
          setTheme(dark);
          props.setCardColor(theme);
        }}
        className=""
      >
        <FaSun className="ml-auto mr-auto" />
        <SettingsBtnText>Card Theme</SettingsBtnText>
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(light);
        props.setCardColor(theme);
      }}
      className=""
    >
      <BsMoonStarsFill className="ml-auto mr-auto" />
      <SettingsBtnText>Card Theme</SettingsBtnText>
    </button>
  );
};

export default CardThemeSelector;
