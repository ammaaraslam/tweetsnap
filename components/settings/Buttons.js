export const SettingsActionButton = ({ children, handleOnClick }) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`p-2 md:text-3xl text-2xl rounded-xl min-w-5 max-w-5 text-center text-textSDark  hover:text-textS  hover:bg-textSDark dark:hover:bg-textS dark:text-textS dark:hover:text-textSDark transition-all duration-200`}
    >
      {children}
    </button>
  );
};
export const SettingsBtnText = ({ children }) => {
  return <p className={`p-0 text-xs font-semibold`}>{children}</p>;
};
export const SettingsButton = ({ children, handleOnClick, btnType }) => {
  const type = btnType;
  if (type == "primary") {
    return (
      <button
        type="button"
        onClick={handleOnClick}
        className={`p-2 md:text-xl text-base inline-flex items-center justify-center font-semibold rounded-xl min-w-full max-w-full text-center text-textS dark:text-textSDark bg-primary opacity-70 hover:opacity-100 transition-all duration-200`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={handleOnClick}
        className={`p-2 md:text-base text-sm inline-flex items-center justify-center font-semibold rounded-xl min-w-5 max-w-6 text-center text-textS dark:text-textSDark bg-textSDark dark:bg-textS opacity-70 hover:opacity-100 transition-all duration-200`}
      >
        {children}
      </button>
    );
  }
};
