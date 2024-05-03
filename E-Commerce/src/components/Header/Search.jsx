import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/items";
import { CiSearch } from "react-icons/ci";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[300], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const SearchAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const uniqueCategories = [...new Set(ITEMS.map((item) => item.type))];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    // Filter items based on input text
    const filtered = ITEMS.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Search className="flex  pl-2 md:px-6">
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchText}
        onChange={handleInputChange}
      />
      <IconButton
        aria-label="show categories"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <CiSearch />
      </IconButton>

      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className="max-h-96 w-72 md:w-96"
      >
        <p>Categories:</p>
        {uniqueCategories.map((category) => (
          <Link
            to={{ pathname: `/${category}` }}
            onClick={() => handleMenuClose()}
            key={category}
          >
            <MenuItem key={category}>{category}</MenuItem>
          </Link>
        ))}
        <p>Products:</p>
        {filteredItems.map((item) => (
          <Link
            to={{ pathname: `/${item.type}` }}
            onClick={handleMenuClose}
            key={item.id}
          >
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
      </Menu>
    </Search>
  );
};

export default SearchAppBar;
