import PropTypes from "prop-types";
const PaginationIndicator = ({ activeIndex, onClick, data }) => {
  const allIndicators = data.map((_, index) => (
    <button
      key={index}
      onClick={() => onClick(index)}
      className={`w-3 h-3 rounded-full mx-1 ${
        activeIndex === index ? "bg-red-500" : "bg-gray-300"
      }`}
    ></button>
  ));
  const indicatorsToShow = allIndicators.slice(0, -2);

  return (
    <div className="flex justify-center align-center mb-8  md:my-4 ">
      {indicatorsToShow}
    </div>
  );
};
export default PaginationIndicator;
PaginationIndicator.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
