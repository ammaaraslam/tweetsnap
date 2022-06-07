import { SettingsActionButton, SettingsBtnText } from "./Buttons";
import { useState } from "react";
import { AiOutlineFontSize } from "react-icons/ai";

const small = "1.125rem";
const big = "1.25rem";

const CardContentSizeSelector = ({ props }) => {
  const currentSize = props.cardContentSize;

  if (currentSize === small) {
    return (
      <SettingsActionButton
        handleOnClick={() => {
          props.setCardContentSize(big);
        }}
      >
        <AiOutlineFontSize className="ml-auto mr-auto text-2xl" />
        <SettingsBtnText>Text Size</SettingsBtnText>
      </SettingsActionButton>
    );
  }
  return (
    <SettingsActionButton
      handleOnClick={() => {
        props.setCardContentSize(small);
      }}
    >
      <AiOutlineFontSize className="ml-auto mr-auto text-3xl" />
      <SettingsBtnText>Text Size</SettingsBtnText>
    </SettingsActionButton>
  );
};

export default CardContentSizeSelector;
