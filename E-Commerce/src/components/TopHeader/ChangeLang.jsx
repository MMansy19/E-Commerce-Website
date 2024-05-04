import { useState } from "react";
import { CircularProgress, Select, MenuItem, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useLang } from "../../context/LangContext.jsx";

function ChangeLang() {
  const { lang, changeLanguage } = useLang();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const langChange = (e) => {
    const selectedLang = e.target.value;
    setLoading(true); // Show loading indicator
    changeLanguage(selectedLang);
    setSelectedLanguage(selectedLang);

    setTimeout(() => {
      setLoading(false); // Hide loading indicator
      setSnackbarOpen(true); // Open Snackbar when language changes
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close Snackbar
  };

  const handleMassage = () => {
    if (selectedLanguage === "en") {
      return "Language changed to English successfully!";
    } else if (selectedLanguage === "gr") {
      return "Sprache erfolgreich in Deutsch geändert!";
    } else {
      return "تم تغيير اللغة إلى العربية بنجاح!";
    }
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
        disabled={loading} // Disable select while loading
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="gr">German(Deutsch)</MenuItem>
        <MenuItem value="ar">Arabic(العربية)</MenuItem>
      </Select>

      {loading ? (
        <CircularProgress />
      ) : (
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
        >
          <Alert severity={"success"} sx={{ width: "100%" }}>
            {handleMassage()}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default ChangeLang;
