import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import RedButton from "../components/common/components/RedButton";
import i18n from "../components/common/components/LangConfig";
import notFoundIcon from "../assets/notFound.png";
import { Fab } from "@mui/material";

const NotFound = () => {
  const [countdown, setCountdown] = useState(20); // Set initial countdown value

  // Function to decrement the countdown
  const decrementCountdown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  };

  // Automatically redirect to home page when countdown reaches 0
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        decrementCountdown();
      } else {
        window.location.href = "/";
      }
    }, 1000); // Update countdown every second
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="flex flex-col justify-around items-start mt-36 mx-4 md:mx-40 ">
      <ActiveLastBreadcrumb path="Home/404 Error" />
      <div className="flex flex-col items-center mt-12 mx-auto">
        <div className="flex flex-col justify-center gap-4 items-center text-center">
          <h1 className="text-3xl md:text-8xl">404 Not Found</h1>{" "}
          <h6 className="text-xs md:text-xl">
            Your visited page not found. You will be redirected to the home page
            in
            <span className="mx-3">
              <Fab>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-30 hover:opacity-80"></span>
                <span className="flex justify-center items-center  bg-red-500 rounded-full w-14 h-14 text-white font-semibold">
                  {countdown}
                </span>
              </Fab>
            </span>
            seconds.
            {/* Simple countdown animation */}
            {/* <div className="countdown-animation w-12 h-12 rounded-full bg-red-500 animate-ping"></div> */}
          </h6>
        </div>

        <img
          src={notFoundIcon}
          alt="notFoundIcon"
          //  className="w-40 h-40 mt-8"
        />
        <Link to="..">
          <RedButton name={i18n.t("redButtons.backToHomePage")} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
