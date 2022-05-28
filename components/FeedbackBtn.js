import React from "react";

function FeedbackBrn() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <>
      <RoundedButton
        handleOnClick={toggling}
        text="text"
        textDark="textDark"
        hoverBg="text"
        hoverBgDark="textDark"
        hoverText="textS"
        hoverTextDark="textSDark"
      >
        drop
      </RoundedButton>
      {isOpen && (
        <div className="">
          <div className="p-1 mt-1">
            <a>?</a>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackBrn;
