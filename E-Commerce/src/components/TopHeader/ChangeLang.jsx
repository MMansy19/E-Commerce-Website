import { useState } from "react";
import { CircularProgress, Select, MenuItem, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useLang } from "../../context/LangContext.jsx";

function ChangeLang() {
  const { lang, changeLanguage } = useLang();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("gr");
  const [loading, setLoading] = useState(false);

  const styles = {
    display: loading ? "none" : "block",
    "& .MuiSelect-select": {
      color: "white",
    },
    "@media (max-width: 768px)": {
      fontSize: "14px",
      width: "70px",
      height: "100%",
    },
  };
  const langChange = (e) => {
    const selectedLang = e.target.value;
    setLoading(true); // Show loading indicator
    changeLanguage(selectedLang);
    setSelectedLanguage(selectedLang);

    setTimeout(() => {
      setLoading(false); // Hide loading indicator
      setSnackbarOpen(true); // Open Snackbar when language changes
    }, 4000);
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
    <div className="w-30 md:w-auto">
      <Select
        sx={styles}
        value={lang}
        onChange={langChange}
        disabled={loading} // Disable select while loading
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="gr">German (Deutsch)</MenuItem>
        <MenuItem value="ar">Arabic (العربية)</MenuItem>
      </Select>
      {loading ? (
        <CircularProgress
          sx={{
            color: "white",
            width: "30px !important",
            height: "30px !important",
            my: "10px !important",
          }}
        />
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
