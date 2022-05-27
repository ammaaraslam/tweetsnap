export const CircularButton = ({ children, handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      type="button"
      className="p-2 text-2xl rounded-full text-primary hover:bg-primary hover:text-dptext transition-all duration-400 ease-in-out"
    >
      {children}
    </button>
  );
};
