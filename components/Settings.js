// Functions
import { useEffect, useRef, useState } from "react";

// Components
import BgSelectorModal from "./settings/BgSelectorModal";
import CardThemeSelector from "./settings/CardThemeSelector";

// Assets
import { AiOutlineBgColors, AiOutlineFontSize } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { MdOpacity } from "react-icons/md";
import { BsTextareaResize, BsDownload } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { FiZoomIn } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";
import { Popover } from "./Popover";
import {
  SettingsActionButton,
  SettingsBtnText,
  SettingsButton,
} from "./settings/Buttons";
import CardContentSizeSelector from "./settings/CardContentSizeSelector";
import { ImageSizeSelector } from "./settings/ImageSizeSelector";
import OpacitySelector from "./settings/OpacitySelector";
import { EngagementsSelector } from "./settings/EngagementsSelector";
import Preview from "./settings/Preview";
import Dropdown from "./settings/Dropdown";

const downloadOptions = ["PNG", "JPEG", "SVG"];

const Settings = ({ props }) => {
  // States
  const [showBgModal, setShowBgModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const [showColorModal, setShowColorModal] = useState(false);
  // const [bgOpen, setBgOpen] = useState(false);
  // const [cBgOpen, setCBgOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [cSizeOpen, setCSizeOpen] = useState(false);
  const [opacityOpen, setOpacityOpen] = useState(false);
  const [engagementsOpen, setEngagementsOpen] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);

  // Toggle Functions
  // const togglingBg = () => setBgOpen(!bgOpen);
  // const togglingCBg = () => setCBgOpen(!cBgOpen);
  const togglingSize = () => setSizeOpen(!sizeOpen);
  const togglingCSize = () => setCSizeOpen(!cSizeOpen);
  const togglingOpacity = () => setOpacityOpen(!opacityOpen);
  const togglingEngagements = () => setEngagementsOpen(!engagementsOpen);
  const togglingDownloadDropdown = () => setDownloadDropdown(!downloadDropdown);

  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  // Detect Outside Click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        [sizeOpen, cSizeOpen, opacityOpen, engagementsOpen, downloadDropdown] &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        // setBgOpen(false);
        // setCBgOpen(false);
        setSizeOpen(false);
        setCSizeOpen(false);
        setOpacityOpen(false);
        setEngagementsOpen(false);
        setDownloadDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sizeOpen, cSizeOpen, opacityOpen, engagementsOpen, downloadDropdown]);

  return (
    <div
      className={`md:w-settings md:h-fit w-11/12 ml-auto mr-auto mt-[5.5rem]  md:mt-0 bg-textS dark:bg-textSDark md:mr-24 rounded-3xl p-2`}
    >
      <div className="grid list-none justify-items-center grid-cols-3 md:grid-cols-2 gap-x-0 md:gap-y-9 md:pt-6 md:pb-9 pb-3 md:pl-1 md:pr-1">
        <SettingsActionButton handleOnClick={() => setShowBgModal(true)}>
          <AiOutlineBgColors className="ml-auto mr-auto" />
          <SettingsBtnText>Background Color</SettingsBtnText>
        </SettingsActionButton>
        {showBgModal && (
          <BgSelectorModal
            props={props}
            onClose={() => setShowBgModal(false)}
          />
        )}
        {/* {bgOpen && (
          <Popover position="top" useRef={ref}>
            <ColorSelector />
          </Popover>
        )} */}
        <CardThemeSelector props={props} />

        {/* {cBgOpen && <Popover position="top" useRef={ref} />} */}
        <CardContentSizeSelector props={props} />
        <SettingsActionButton handleOnClick={togglingCSize}>
          <BsTextareaResize className="ml-auto mr-auto" />
          <SettingsBtnText>Size</SettingsBtnText>
        </SettingsActionButton>
        {cSizeOpen && (
          <Popover position="right" useRef={ref}>
            <ImageSizeSelector props={props} />
          </Popover>
        )}
        <SettingsActionButton handleOnClick={togglingOpacity}>
          <MdOpacity className="ml-auto mr-auto" />
          <SettingsBtnText>Card Opacity</SettingsBtnText>
        </SettingsActionButton>
        {opacityOpen && (
          <Popover position="left" useRef={ref}>
            <OpacitySelector props={props} />
          </Popover>
        )}
        <SettingsActionButton handleOnClick={togglingEngagements}>
          <GoSettings className="ml-auto mr-auto" />
          <SettingsBtnText>Engagements</SettingsBtnText>
        </SettingsActionButton>
        {engagementsOpen && (
          <Popover position="right" useRef={ref}>
            <EngagementsSelector props={props} />
          </Popover>
        )}
      </div>
      <div className="pt-1 pb-3 pl-1 pr-1 items-center justify-center text-center">
        {/* <div className="inline-flex items-center justify-center pb-2">
          <div className="mr-1">
            <SettingsButton handleOnClick={() => setShowPreviewModal(true)}>
              <FiZoomIn className="mr-1" />
              Preview
            </SettingsButton>
          </div>
          {showPreviewModal && (
            <Preview onClose={() => setShowBgModal(false)} />
          )}
          <div className="ml-0">
            <SettingsButton>
              <IoCopy className="mr-1" />
              Copy
            </SettingsButton>
          </div>
        </div> */}
        <SettingsButton
          handleOnClick={
            // props.convert("png");
            toggling
          }
          btnType="primary"
        >
          Download
          {props.downloading ? (
            <CgSpinner className="ml-3 animate-spin " />
          ) : (
            <BsDownload className="ml-3" />
          )}
        </SettingsButton>
        {isOpen && <Dropdown dropdownItems={downloadOptions} />}
      </div>
    </div>
  );
};

export default Settings;
