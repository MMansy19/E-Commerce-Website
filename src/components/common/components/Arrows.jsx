const Arrows = () => {
  return (
    <div className="hidden md:block absolute  right-8 md:right-32 gap-2">
      <button className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L1 8L8 15M1 8H17"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 8H18M18 8L11 1M18 8L11 15"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
export default Arrows;
