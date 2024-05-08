import { useState } from "react";
import { Link } from "@mui/material";
import { TextField } from "@mui/material";
import { Button, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import SignImg from "./SignImg.jsx";
import { auth } from "../Auth/firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import i18n from "../components/common/components/LangConfig";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Update message state on successful login
      setMessage("Login successful!");
      setError("");
      setOpen(true);
      // Clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login errors
      setError(error.message);
      setOpen(true);
    }
  };

  const handleForgotPassword = async () => {
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
      setOpen(true);
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="flex justify-center md:justify-start  items-center md:mt-14 mb-36 mt-40 md:gap-32 ">
      <SignImg />
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="text-xl md:text-4xl font-medium font-inter ">
          {i18n.t("loginPage.title")}
        </h1>
        <p>{i18n.t("loginPage.enter")}</p>
        <form
          className="flex flex-col gap-6 w-72 md:w-96"
          onSubmit={handleLogIn}
        >
          <TextField
            label={i18n.t("loginPage.emailOrPhone")}
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label={i18n.t("loginPage.password")}
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center gap-2 justify-between mt-4">
            <Button
              type="submit"
              sx={{
                color: "white",
                fontSize: "16px",
                bgcolor: "hsla(0, 68%, 56%, 1)",
                textTransform: "none",
                padding: "16px 0",
                borderRadius: "4px",
                fontWeight: "500",
                width: "40%",
                ":hover": {
                  bgcolor: "hsla(0, 68%, 56%, .9)",
                },
              }}
              variant="contained"
              color="primary"
              className="my-2"
            >
              {i18n.t("loginPage.login")}
            </Button>
            <Link
              href="#"
              onClick={handleForgotPassword}
              sx={{
                color: "hsla(0, 68%, 56%, .9)",
                fontWeight: "500",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {i18n.t("loginPage.forgot")}
            </Link>
          </div>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error ? error : message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LogIn;
