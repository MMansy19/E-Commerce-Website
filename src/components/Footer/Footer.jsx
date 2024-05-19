import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Auth/firebase";
// import { useState } from "react";
import { Container, Grid, Typography, Snackbar, Alert } from "@mui/material";
import QrCode from "./QrCode.png";
import GooglePlay from "./GooglePlay.png";
import AppStore from "./AppStore.png";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Attempt to create a new user account
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     // Send email verification
  //     await sendEmailVerification(userCredential.user);

  //     setSuccess("Account created successfully! Verification email sent.");
  //     setOpen(true);
  //   } catch (error) {
  //     // Handle specific errors
  //     if (error.code === "auth/email-already-in-use") {
  //       setSuccess("");
  //       setError("The email address is already in use.");
  //     } else {
  //       setError(error.message); // Handle other errors generically
  //     }
  //     setOpen(true);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid
          container
          direction="row"
          spacing={5}
          className="md:min-h-96 justify-center items-stretch md:justify-between"
        >
          <Grid
            item
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-5"
          >
            <Typography className="font-bold" variant="h6" gutterBottom>
              Exclusive
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
            {/* <div className=" mt-4 flex w-56	 py-2 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 bg-transparent text-white placeholder-gray-400">
              <div className=" flex flex-col ">
                <input
                  type="email"
                  placeholder={i18n.t("footer.enterEmail")}
                  className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={i18n.t("footer.enterPassword")}
                  className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button onClick={handleSignUp}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div> */}
          </Grid>

          {/* Support */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            <Typography gutterBottom>{i18n.t("footer.address")}</Typography>
            <Typography variant="body2">exclusive@gmail.com</Typography>
            <Typography variant="body2">+88015-88888-9999</Typography>
          </Grid>

          {/* Account */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.account")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/account"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.myAccount")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/signup"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.sign")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/cart" sx={{ color: "white" }}>
                  {i18n.t("footer.cart")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/wishlist"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.wishlist")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/category"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.shop")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Quick Link */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            <ul className="list-none p-0">
              <li>
                <Link to="/allProducts" sx={{ color: "white" }}>
                  {i18n.t("allProducts.redTitle")}
                </Link>
              </li>
              <li>
                <Link to="/category" sx={{ color: "white" }}>
                  {i18n.t("category.redTitle")}
                </Link>
              </li>

              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.usage")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.FAQ")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.Contact")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Download App */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom className="text-white">
              {i18n.t("footer.downloadApp")}
            </Typography>
            <Typography variant="body2" gutterBottom className="text-gray-500 ">
              {i18n.t("footer.save")}
            </Typography>
            <div className="flex flex-row gap-2 my-4">
              <img src={QrCode} alt="Qr Code" />
              <div>
                <Link onClick={scrollToTop} to="/">
                  <img src={GooglePlay} alt="Google Play" />
                </Link>
                <Link onClick={scrollToTop} to="/">
                  <img src={AppStore} alt="App Store" />
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2">
              <Link onClick={scrollToTop} to="/" className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link onClick={scrollToTop} to="/" className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1920_1563)">
                    <path
                      d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="0.2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1920_1563">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link onClick={scrollToTop} to="/" className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link onClick={scrollToTop} to="/" className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                    fill="white"
                  />
                </svg>{" "}
              </Link>
              <div className="mt-8 flex items-center"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Copyright */}
      <hr className="w-full border-gray-800 my-4" />
      <Typography variant="body2" className=" text-center text-gray-600">
        {i18n.t("footer.copyrights")}
      </Typography>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        {success ? (
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {success}
          </Alert>
        ) : (
          <Alert
            onClose={() => setOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        )}
      </Snackbar> */}
    </footer>
  );
};

export default Footer;
