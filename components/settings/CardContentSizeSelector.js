import { SettingsActionButton, SettingsBtnText } from "./Buttons";
import { useState } from "react";
import { AiOutlineFontSize } from "react-icons/ai";

const small = "1.125rem";
const big = "1.5rem";

const CardContentSizeSelector = ({ props }) => {
  const [contentSize, setContentSize] = useState(small);
  const currentSize = contentSize;

  if (currentSize === small) {
    return (
      <SettingsActionButton
        handleOnClick={() => {
          setContentSize(big);
          props.setCardContentSize(contentSize);
        }}
      >
        <AiOutlineFontSize className="ml-auto mr-auto text-lg" />
        <SettingsBtnText>Card Theme</SettingsBtnText>
      </SettingsActionButton>
    );
  }
  return (
    <SettingsActionButton
      handleOnClick={() => {
        setContentSize(small);
        props.setCardContentSize(contentSize);
      }}
    >
      <AiOutlineFontSize className="ml-auto mr-auto text-2xl" />
      <SettingsBtnText>Card Theme</SettingsBtnText>
    </SettingsActionButton>
  );
};

export default CardContentSizeSelector;
