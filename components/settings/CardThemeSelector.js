import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { SettingsActionButton, SettingsBtnText } from "./Buttons";

const light = "#FFFFFF";
const dark = "#000000";

const CardThemeSelector = ({ props }) => {
  const currentTheme = props.cardColor;

  if (currentTheme === light) {
    return (
      <SettingsActionButton
        handleOnClick={() => {
          props.setCardColor(dark);
          props.setCardFontColor(light);
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
        props.setCardColor(light);
        props.setCardFontColor(dark);
      }}
    >
      <IoMoon className="ml-auto mr-auto" />
      <SettingsBtnText>Card Theme</SettingsBtnText>
    </SettingsActionButton>
  );
};

export default CardThemeSelector;
