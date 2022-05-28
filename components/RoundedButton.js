// export function RoundedButton({
//   children,
//   handleOnClick,
//   text,
//   textDark,
//   hoverBg,
//   hoverBgDark,
//   hoverText,
//   hoverTextDark,
// }) {
//   return (
//     <button
//       onClick={handleOnClick}
//       type="button"
//       className={`p-2 text-2xl rounded-xl text-${text} dark:text-${textDark} hover:text-${hoverText} hover:bg-${hoverBg} dark:hover:bg-${hoverBgDark} dark:hover:text-${hoverTextDark} transition-all duration-400 ease-out`}
//     >
//       {children}
//     </button>
//   );
// }
export const RoundedButton = ({
  children,
  handleOnClick,
  textHover,
  textHoverDark,
  hoverBg,
  hoverBgDark,
  textLight,
  textDark,
}) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`p-2 text-2xl rounded-xl text-${textLight}  hover:text-${textHover} hover:bg-${hoverBg} dark:hover:bg-${hoverBgDark} dark:text-${textDark} dark:hover:text-${textHoverDark} `}
    >
      {children}
    </button>
  );
};
