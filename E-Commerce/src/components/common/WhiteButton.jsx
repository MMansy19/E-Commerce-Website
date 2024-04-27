import PropTypes from "prop-types";

const WhiteButton = ({ name }) => {
  return (
    <button className="text-sm md:text-lg border border-gray-600 hover:shadow-xl text-black px-6 md:px-12 py-3 rounded-md  transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
      {name}
    </button>
  );
};

WhiteButton.propTypes = {
  name: PropTypes.string.isRequired,
};
export default WhiteButton;
