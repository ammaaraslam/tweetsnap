const Tweet = ({ bg }) => {
  return (
    <div
      className="md:w-1/2 md:h-4/6 w-5/6 h-2/5 ml-auto mr-auto md:ml-20 rounded-3xl p-3"
      style={{ background: bg }}
    >
      Tweet
    </div>
  );
};

export default Tweet;
