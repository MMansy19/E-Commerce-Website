import { useState } from "react";
import { Link } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SignImg from "./SignImg.jsx";
import { auth } from "../Auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Update message state on successful login
      setMessage("Login successful!");
      // Clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login errors
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center md:justify-start  items-center md:mt-14 mb-36 mt-40 md:gap-32 ">
      <SignImg />
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="text-4xl font-medium font-inter ">
          Log in to Exclusive
        </h1>
        <p className="">Enter your details below</p>
        <form
          className="flex flex-col gap-6 w-72 md:w-96"
          onSubmit={handleLogIn}
        >
          <TextField
            label="Email or Phone Number"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Password"
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
              Log In
            </Button>
            <Link
              href="#"
              sx={{
                color: "hsla(0, 68%, 56%, .9)",
                fontWeight: "500",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default LogIn;
