import PropTypes from "prop-types";

const RedButton = ({ name, disabled = false }) => {
  return (
    <button
      className={`text-sm md:text-base md:px-12 py-3 rounded px-6
    ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-red-600 text-white hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px] focus:translate-y-0"
    }
    `}
    >
      {name}
    </button>
  );
};

RedButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default RedButton;
