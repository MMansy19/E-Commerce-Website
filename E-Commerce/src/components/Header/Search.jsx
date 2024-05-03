import { useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/items";
import { CiSearch } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { SelectedProductContext } from "../../context/SelectedProductContext";
import i18n from "../common/LangConfig";

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

const SearchAppBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setSelectedProduct } = useContext(SelectedProductContext);

  let selectedItem = ITEMS[0];

  const handleItemSelected = (event) => {
    setSearchText(event.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    if (searchText) {
      selectedItem = ITEMS.find(
        (item) => item.title.trim() === searchText.trim()
      );
      if (selectedItem) {
        setSelectedProduct(selectedItem);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Search className="flex pl-2 md:px-6">
      <Autocomplete
        className="w-36 md:w-96"
        freeSolo
        disableClearable
        options={ITEMS.map((item) => item.title)}
        value={searchText}
        onSelect={handleItemSelected}
        // <Link to={{ pathname: `/${selectedItem.title}` }} />
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={i18n.t("search")}
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearchText(event.target.value)}
          />
        )}
      />
      <IconButton aria-label="search" color="inherit" onClick={handleSearch}>
        <Link to={{ pathname: `/${selectedItem.title}` }}>
          <CiSearch />
        </Link>
      </IconButton>
    </Search>
  );
};

export default SearchAppBar;
