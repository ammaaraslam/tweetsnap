const Tweet = ({ bg, cardColor, opacity, width, height }) => {
  return (
    <div
      className="md:w-1/2 md:h-4/6 w-5/6 h-2/5 ml-auto mr-auto md:ml-20 rounded-3xl p-10 flex justify-center items-center"
      style={{ background: bg, width: width, height: height }}
    >
      <div
        id="tweet-card"
        className="md:w-3/4 md:h-4/6 w-5/6 h-3/4 rounded-3xl p-3 scale-125"
        style={{ background: cardColor, opacity: opacity }}
      ></div>
    </div>
  );
};

export default Tweet;
