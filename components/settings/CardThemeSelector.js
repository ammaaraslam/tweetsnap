import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { SettingsActionButton, SettingsBtnText } from "./Buttons";

import { useState } from "react";

const light = "#FFFFFF";
const dark = "#000000";

const CardThemeSelector = ({ props }) => {
  const [theme, setTheme] = useState(light);
  const currentTheme = theme;

  if (currentTheme === light) {
    return (
      <SettingsActionButton
        handleOnClick={() => {
          setTheme(dark);
          props.setCardColor(theme);
        }}
      >
        <IoSunny className="ml-auto mr-auto" />
        <SettingsBtnText>Card Theme</SettingsBtnText>
      </SettingsActionButton>
    );
  }
  return (
    <SettingsActionButton
      handleOnClick={() => {
        setTheme(light);
        props.setCardColor(theme);
      }}
    >
      <IoMoon className="ml-auto mr-auto" />
      <SettingsBtnText>Card Theme</SettingsBtnText>
    </SettingsActionButton>
  );
};

export default CardThemeSelector;
