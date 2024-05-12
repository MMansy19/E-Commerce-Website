import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import { CiSearch } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import i18n from "../common/components/LangConfig";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.grey[300], 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.6),
  },
  flex: 1,
  maxWidth: "400px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  "& .MuiAutocomplete-root": {
    flex: 1,
    "& .MuiInputBase-root": {
      borderRadius: "10",
      backgroundColor: "transparent",
      "& .MuiInputBase-input": {
        borderRadius: "10",
        fontSize: "0.9rem", // Default font size for input
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.8rem", // Smaller font size for mobile
        },
      },
    },
  },
  "& .MuiIconButton-root": {
    "&:hover": {
      backgroundColor: "rgba(219, 68, 68, .9)",
      color: "white",
    },
  },
}));

const SearchAppBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchText(searchText.trim());
    }
  };

  return (
    <Search className="flex items-center justify-center w-48 min-[425px]:w-64 sm:max-[1200px]:w-96 min-[1200px]:w-60 min-[1450px]:w-96 ">
      <Autocomplete
        freeSolo
        disableClearable
        disableListWrap
        openOnFocus
        options={ITEMS.map((item) => item.title)}
        value={searchText}
        onChange={(event, newValue) => setSearchText(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={i18n.t("search")}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      {searchText && (
        <IconButton aria-label="search" color="inherit">
          <Link to={`/allProducts/${searchText}`}>
            <CiSearch className="w-5 h-auto md:w-8 md:h-8" />
          </Link>
        </IconButton>
      )}
    </Search>
  );
};

export default SearchAppBar;
