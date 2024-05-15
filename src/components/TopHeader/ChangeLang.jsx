import { useState } from "react";
import { CircularProgress, Select, MenuItem, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useLang } from "../../context/LangContext.jsx";

function ChangeLang() {
  const { lang, changeLanguage } = useLang();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const styles = {
    display: loading ? "none" : "block",
    "& .MuiSelect-select": {
      color: "white",
    },
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
  };

  const langChange = (e) => {
    const selectedLang = e.target.value;
    setSnackbarOpen(true);
    setLoading(true);
    changeLanguage(selectedLang);
    setSelectedLanguage(selectedLang);

    setTimeout(() => {
      window.location.href = "/";
      setLoading(false);
    }, 1000);
  };

  const handleMassage = () => {
    if (selectedLanguage === "en") {
      return "The page will be reloaded and the language will be changed to English!";
    } else if (selectedLanguage === "gr") {
      return "Die Seite wird neu geladen und die Sprache wird auf Deutsch geändert!";
    } else if (selectedLanguage === "ar") {
      return "سيتم إعادة تحميل الصفحة وتغيير اللغة للعربية!";
    } else if (selectedLanguage === "es") {
      return "¡La página se recargará y el idioma se cambiará a español!";
    }
  };

  return (
    <div>
      <Select
        sx={styles}
        value={lang}
        onChange={langChange}
        disabled={loading} // Disable select while loading
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">Arabic (العربية)</MenuItem>
        <MenuItem value="gr">German (Deutsch)</MenuItem>
        <MenuItem value="es">Spanish (Español)</MenuItem>
      </Select>
      {loading && (
        <>
          <CircularProgress
            sx={{
              color: "white",
              width: "30px !important",
              height: "30px !important",
              my: "10px !important",
            }}
          />
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={1000}
            onClose={() => setSnackbarOpen(false)}
          >
            <Alert severity={"success"} sx={{ width: "100%" }}>
              {handleMassage()}
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
}

export default ChangeLang;
