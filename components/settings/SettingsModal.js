import { IoClose } from "react-icons/io5";

const gradients = [
  "linear-gradient(to right, #eecda3, #ef629f)",
  "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
  "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))",
  "linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))",
  ,
  "linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229))",
  "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))",
  "linear-gradient(109.6deg, rgb(245, 95, 152) 11.2%, rgb(254, 148, 136) 100.2%)",
  "linear-gradient(to right, rgb(74, 194, 154), rgb(189, 255, 243))",
  "linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))",
  "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
  "linear-gradient(90deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%)",
  "linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104))",
  "linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157))",
  "linear-gradient(to right, rgb(29, 151, 108), rgb(147, 249, 185))",
  "linear-gradient(0.2deg, rgb(51, 204, 255) 4.8%, rgb(51, 102, 255) 85.5%)",
  "linear-gradient(106.8deg, rgb(117, 255, 220) 6%, rgb(163, 216, 255) 47.6%, rgb(248, 215, 251) 87.8%)",
  "linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)",
  "linear-gradient(2.1deg, rgb(116, 253, 210) 5%, rgb(0, 191, 247) 95.8%)",
  "linear-gradient(110.7deg, rgb(9, 154, 151) 6.3%, rgb(21, 205, 168) 90.6%)",
];

const SettingsModal = ({ children, onClose, title }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
      <div className="bg-textLight dark:bg-textDark md:w-1/2 md:h-1/2 p-4 rounded-3xl">
        <button
          type="button"
          onClick={onClose}
          className="float-right p-1 text-2xl rounded-xl text-secondary border-2 border-secondary hover:text-dark hover:bg-secondary transition-all duration-200 ease-in-out"
        >
          <IoClose />
        </button>
        <h1 className="mt-0 text-3xl font-bold text-textSDark dark:text-textS">
          {title}
        </h1>
        <div className="flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center h-9/10 mt-1 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
