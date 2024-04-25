import PropTypes from "prop-types";

const RedButton = ({ name }) => {
  return (
    <button className="text-sm md:text-lg bg-red-600 text-white px-6 md:px-12 py-3 rounded-lg hover:bg-red-500 transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
      {name}
    </button>
  );
};

RedButton.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RedButton;
