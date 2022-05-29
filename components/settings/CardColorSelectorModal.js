import SettingsModal from "./SettingsModal";

const solidColors = [
  "#eecda3",
  "#00DBDE",
  "rgb(168, 255, 120)",
  "rgb(253, 200, 48)",
  ,
  "rgb(116, 235, 213)",
  "rgb(255, 94, 98)",
  "rgb(254, 148, 136)",
  " rgb(74, 194, 154)",
  "rgb(255, 175, 189)",
  "hsla(152, 100%, 50%, 1)",
  "hsla(150, 61%, 48%, 1)",
  "rgb(255, 75, 31)",
  "rgb(81, 74, 157)",
  "rgb(29, 151, 108)",
  "rgb(51, 102, 255)",
  "rgb(163, 216, 255)",
  "rgb(245, 135, 0)",
];

const CardColorSelectorModal = ({ onClose, props }) => {
  return (
    <SettingsModal title="Select Card Color" onClose={onClose}>
      {solidColors.map((s) => (
        <div
          key={s}
          className={`w-20 h-20 inline-flex m-2 rounded-xl ml-2 text-center`}
          style={{ background: s }}
          onClick={() => {
            props.setCardColor(s);
            onClose();
          }}
        ></div>
      ))}
    </SettingsModal>
  );
};

export default CardColorSelectorModal;
