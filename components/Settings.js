import { AiOutlineBgColors } from "react-icons/ai";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOpacity } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { FiZoomIn } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="w-settings h-5/6 bg-textS dark:bg-textSDark md:mr-20 rounded-3xl p-3 transition-all duration-200">
      <div className="grid list-none justify-items-center grid-cols-2 gap-x-0 gap-y-9 pt-6 pb-9 pl-1 pr-1">
        <SettingsActionButton>
          <AiOutlineBgColors className="ml-auto mr-auto" />
          <SettingsBtnText>Background Color</SettingsBtnText>
        </SettingsActionButton>
        <SettingsActionButton>
          <MdPhotoSizeSelectLarge className="ml-auto mr-auto" />
          <SettingsBtnText>Resize Card</SettingsBtnText>
        </SettingsActionButton>
        <SettingsActionButton>
          <GoSettings className="ml-auto mr-auto" />
          <SettingsBtnText>Engagements</SettingsBtnText>
        </SettingsActionButton>
        <SettingsActionButton>
          <MdOutlineColorLens className="ml-auto mr-auto" />
          <SettingsBtnText>Card Color</SettingsBtnText>
        </SettingsActionButton>
        <SettingsActionButton>
          <MdOpacity className="ml-auto mr-auto" />
          <SettingsBtnText>Card Opacity</SettingsBtnText>
        </SettingsActionButton>
        <SettingsActionButton>
          <BsTextareaResize className="ml-auto mr-auto" />
          <SettingsBtnText>Size</SettingsBtnText>
        </SettingsActionButton>
      </div>
      <div className="p-1 items-center justify-center text-center">
        <div className="inline-flex items-center justify-center pb-2">
          <div className="mr-1">
            <SettingsButton>
              <FiZoomIn className="mr-1" />
              Preview
            </SettingsButton>
          </div>
          <div className="ml-0">
            <SettingsButton>
              <IoCopy className="mr-1" />
              Copy
            </SettingsButton>
          </div>
        </div>
        <SettingsButton btnType="primary">
          Download
          <BsDownload className="ml-3" />
        </SettingsButton>
      </div>
    </div>
  );
};

export default Settings;

const SettingsActionButton = ({ children, handleOnClick }) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`p-2 text-3xl rounded-xl min-w-5 max-w-5 text-center text-textSDark  hover:text-textS hover:bg-textSDark dark:hover:bg-textS dark:text-textS dark:hover:text-textSDark`}
    >
      {children}
    </button>
  );
};
const SettingsBtnText = ({ children }) => {
  return <p className={`p-0 text-xs font-medium`}>{children}</p>;
};
const SettingsButton = ({ children, handleOnClick, btnType }) => {
  const type = btnType;
  if (type == "primary") {
    return (
      <button
        type="button"
        onClick={handleOnClick}
        className={`p-2 text-xl inline-flex items-center justify-center font-semibold rounded-xl min-w-full max-w-full text-center text-textS dark:text-textSDark bg-primary opacity-70 hover:opacity-100`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`p-2 text-base inline-flex items-center justify-center font-semibold rounded-xl min-w-6 max-w-6 text-center text-textS dark:text-textSDark bg-textSDark dark:bg-textS opacity-70 hover:opacity-100`}
    >
      {children}
    </button>
  );
};
