/* eslint-disable react/no-unknown-property */
import { Link } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SignImg from "./SignImg.jsx";

const LogIn = () => {
  return (
    <div className="flex justify-center md:justify-start  items-center md:mt-14 mb-36 mt-40 md:gap-32 ">
      <SignImg />
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="text-4xl font-medium font-inter ">
          Log in to Exclusive
        </h1>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-6 w-72 md:w-96">
          <TextField label="Email or Phone Number" variant="standard" />
          <TextField type="password" label="Password" variant="standard" />

          <div className="flex items-center gap-2 justify-between mt-4">
            <Button
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
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
