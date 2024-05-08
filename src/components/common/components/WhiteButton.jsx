import PropTypes from "prop-types";

const WhiteButton = ({ name, onClick, disabled = false }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        disabled
          ? "cursor-not-allowed  hover:text-gray-400 bg-gray-100 hover:bg-gray-200"
          : "cursor-pointer border-gray-600 hover:shadow-xl text-black transition-transform duration-100 transform hover:translate-y-[-4px] focus:translate-y-0"
      }
      text-sm md:text-lg border  px-6 md:px-12 py-3 rounded-md  `}
    >
      {name}
    </button>
  );
};

WhiteButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
export default WhiteButton;
