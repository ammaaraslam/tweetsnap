import SettingsModal from "./SettingsModal";
import { gradients } from "../../gradients";

const BgSelectorModal = ({ onClose, props }) => {
  return (
    <SettingsModal title=" Select Background Color" onClose={onClose}>
      {gradients.map((g) => (
        <div
          key={g}
          className={`w-20 h-20 inline-flex m-2 rounded-xl ml-2 text-center`}
          style={{ background: g }}
          onClick={() => {
            props.setBg(g);
            onClose();
          }}
        ></div>
      ))}
    </SettingsModal>
  );
};

export default BgSelectorModal;
