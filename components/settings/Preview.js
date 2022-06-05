import Tweet from "../Tweet";
import SettingsModal from "./SettingsModal";

const Preview = ({ onClose }) => {
  return (
    <SettingsModal title={"Preiview"} onClose={onClose}>
      <Tweet />
    </SettingsModal>
  );
};

export default Preview;
