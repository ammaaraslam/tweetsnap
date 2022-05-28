const RoundedButton = ({ children, handleOnClick, btnType }) => {
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
  } else {
    return (
      <button
        type="button"
        onClick={handleOnClick}
        className={`p-2 text-base inline-flex items-center justify-center font-semibold rounded-xl min-w-6 max-w-6 text-center text-textS dark:text-textSDark bg-textSDark dark:bg-textS opacity-70 hover:opacity-100`}
      >
        {children}
      </button>
    );
  }
};

export default RoundedButton;
