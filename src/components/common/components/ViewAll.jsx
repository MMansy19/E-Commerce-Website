import PropTypes from "prop-types";
import RedButton from "./RedButton";
import { Link } from "react-router-dom";

const ViewAll = ({ name }) => {
  return (
    <Link to="/allProducts">
      <RedButton name={name} />
    </Link>
  );
};

ViewAll.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ViewAll;
