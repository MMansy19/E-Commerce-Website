// ChangeLang.jsx
import { Select, MenuItem } from "@mui/material";
import { useLang } from "../../context/LangContext.jsx";

function ChangeLang() {
  const { lang, changeLanguage } = useLang();

  const langChange = (e) => {
    const selectedLang = e.target.value;
    changeLanguage(selectedLang);
  };

  return (
    <div>
      <Select
        sx={{
          "& .MuiSelect-select": {
            color: "white",
          },
        }}
        value={lang}
        onChange={langChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="gr">German(Deutsch)</MenuItem>
        <MenuItem value="ar">Arabic(العربية)</MenuItem>
      </Select>
    </div>
  );
}

export default ChangeLang;
