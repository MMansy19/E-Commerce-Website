import PropTypes from "prop-types";
import RedButton from "./RedButton";
import { Link } from "@mui/material";

const ViewAll = ({ name }) => {
  return (
    <Link href="/allProducts">
      <RedButton name={name} />
    </Link>
  );
};

ViewAll.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ViewAll;
