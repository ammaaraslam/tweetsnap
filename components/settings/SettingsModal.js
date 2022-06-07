import { IoClose } from "react-icons/io5";

const SettingsModal = ({ children, onClose, title }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
      <div className="bg-textLight dark:bg-textDark md:w-1/2 md:h-1/2 p-4 rounded-3xl">
        <button
          type="button"
          onClick={onClose}
          className="float-right p-1 text-2xl rounded-xl text-secondary border-2 border-secondary hover:text-dark hover:bg-secondary transition-all duration-300 ease-in-out"
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
