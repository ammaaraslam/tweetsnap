import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { SettingsActionButton, SettingsBtnText } from "./Buttons";

const CardThemeSelector = ({ props }) => {
  const currentTheme = props.cardColor;
  const lightFont = "#FFFFFF";
  const darkFont = "#000000";
  const light = `rgba(255, 255, 255, ${props.opacity})`;
  const dark = `rgba(0, 0, 0, ${props.opacity})`;

  if (currentTheme === light) {
    return (
      <SettingsActionButton
        handleOnClick={() => {
          props.setCardColor(dark);
          props.setCardFontColor(lightFont);
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
        props.setCardFontColor(darkFont);
      }}
    >
      <IoMoon className="ml-auto mr-auto" />
      <SettingsBtnText>Card Theme</SettingsBtnText>
    </SettingsActionButton>
  );
};

export default CardThemeSelector;
