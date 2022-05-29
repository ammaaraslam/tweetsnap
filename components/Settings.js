// Functions
import { useEffect, useRef, useState } from "react";

// Components
import BgSelectorModal from "./settings/BgSelectorModal";
import CardColorSelectorModal from "./settings/CardColorSelectorModal";

// Assets
import { AiOutlineBgColors } from "react-icons/ai";
import { MdPhotoSizeSelectLarge, MdOutlineColorLens } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { MdOpacity } from "react-icons/md";
import { BsTextareaResize, BsDownload } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { FiZoomIn } from "react-icons/fi";
import { Popover } from "./Popover";
import {
  SettingsActionButton,
  SettingsBtnText,
  SettingsButton,
} from "./settings/Buttons";
import { CardSizeSelector } from "./settings/CardSizeSelector";
import { ImageSizeSelector } from "./settings/ImageSizeSelector";
import OpacitySelector from "./settings/OpacitySelector";
import { EngagementsSelector } from "./settings/EngagementsSelector";

const Settings = ({ props }) => {
  // States
  const [showBgModal, setShowBgModal] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  // const [bgOpen, setBgOpen] = useState(false);
  // const [cBgOpen, setCBgOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [cSizeOpen, setCSizeOpen] = useState(false);
  const [opacityOpen, setOpacityOpen] = useState(false);
  const [engagementsOpen, setEngagementsOpen] = useState(false);

  // Toggle Functions
  // const togglingBg = () => setBgOpen(!bgOpen);
  // const togglingCBg = () => setCBgOpen(!cBgOpen);
  const togglingSize = () => setSizeOpen(!sizeOpen);
  const togglingCSize = () => setCSizeOpen(!cSizeOpen);
  const togglingOpacity = () => setOpacityOpen(!opacityOpen);
  const togglingEngagements = () => setEngagementsOpen(!engagementsOpen);

  const ref = useRef();

  // Detect Outside Click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        [sizeOpen, cSizeOpen, opacityOpen, engagementsOpen] &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        // setBgOpen(false);
        // setCBgOpen(false);
        setSizeOpen(false);
        setCSizeOpen(false);
        setOpacityOpen(false);
        setEngagementsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sizeOpen, cSizeOpen, opacityOpen, engagementsOpen]);

  return (
    <div
      className={`md:w-settings md:h-4/5 w-11/12 ml-auto mr-auto mt-[5.5rem]  md:mt-0 bg-textS dark:bg-textSDark md:mr-22 rounded-3xl p-2 transition-all duration-200`}
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
        <SettingsActionButton handleOnClick={setShowColorModal}>
          <MdOutlineColorLens className="ml-auto mr-auto" />
          <SettingsBtnText>Card Color</SettingsBtnText>
        </SettingsActionButton>
        {showColorModal && (
          <CardColorSelectorModal
            props={props}
            onClose={() => setShowColorModal(false)}
          />
        )}

        {/* {cBgOpen && <Popover position="top" useRef={ref} />} */}
        <SettingsActionButton handleOnClick={togglingSize}>
          <MdPhotoSizeSelectLarge className="ml-auto mr-auto" />
          <SettingsBtnText>Resize Card</SettingsBtnText>
        </SettingsActionButton>
        {sizeOpen && (
          <Popover position="left" useRef={ref}>
            <CardSizeSelector />
          </Popover>
        )}
        <SettingsActionButton handleOnClick={togglingCSize}>
          <BsTextareaResize className="ml-auto mr-auto" />
          <SettingsBtnText>Size</SettingsBtnText>
        </SettingsActionButton>
        {cSizeOpen && (
          <Popover position="right" useRef={ref}>
            <ImageSizeSelector />
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
            <EngagementsSelector />
          </Popover>
        )}
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
