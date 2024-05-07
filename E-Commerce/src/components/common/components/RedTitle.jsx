/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const RedTitle = ({ title, color = "red-500" }) => {
  return (
    <div className="mb-8 flex flex-row gap-4 items-center md:text-lg  font-semibold">
      <span className="bg-red-500 h-10 w-5 rounded"></span>
      <span className={"text-" + color}>{title}</span>
    </div>
  );
};

RedTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default RedTitle;
