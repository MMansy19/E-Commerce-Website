/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../../Auth/firebase";
import i18n from "../common/components/LangConfig";
import ReadmeComponent from "../Readme/ReadmeComp";
// import ThemeSwitcher from "./ThemeSwitcher";
const Profile = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext); // Get current user from AuthContext

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  return (
    <div className="flex justify-between md:justify-around items-center md:gap-4 md:ml-4 ">
      <Link to="/wishlist">
        <IconButton
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span
            className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm ${
              wishlistItems.length == 0 ? "hidden " : "bg-red-500"
            }`}
          >
            {wishlistItems.length}
          </span>
          <svg
            className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Link>
      <Link to="/cart">
        <IconButton
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span
            className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm ${
              cartItems.length == 0 ? "hidden " : "bg-red-500"
            }`}
          >
            {cartItems.length}
          </span>

          <svg
            className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 5H7L10 22H26"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Link>
      {currentUser && (
        <>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <svg
              className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        </>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            color: "white",
            background: "rgba(31, 31, 31, 0.5)",
            backdropFilter: "blur(40px)",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/account">
          <MenuItem sx={{ display: "flex", gap: "16px" }} onClick={handleClose}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {i18n.t("headerIcons.1")}
          </MenuItem>
        </Link>
        <Link to="/account">
          <MenuItem sx={{ display: "flex", gap: "16px" }} onClick={handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {i18n.t("headerIcons.2")}
          </MenuItem>
        </Link>

        <Link to="/account">
          <MenuItem sx={{ display: "flex", gap: "16px" }} onClick={handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1920_458)">
                <path
                  d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="11.25"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1920_458">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {i18n.t("headerIcons.3")}
          </MenuItem>
        </Link>
        <Link to="/account">
          <MenuItem sx={{ display: "flex", gap: "16px" }} onClick={handleClose}>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8284 6.93621C18.4517 6.93621 18.7176 7.72859 18.2205 8.10461L14.8905 10.6234C14.1688 11.1693 13.8661 12.1087 14.1334 12.9732L15.3864 17.0261C15.5735 17.6312 14.8729 18.1193 14.3701 17.7341L11.3075 15.3879C10.536 14.7969 9.46399 14.7969 8.69251 15.3879L5.61357 17.7466C5.11152 18.1312 4.41161 17.645 4.59677 17.0403L5.83243 13.0046C6.09532 12.146 5.79694 11.2145 5.08413 10.6684L1.73432 8.1022C1.24111 7.72436 1.50831 6.93621 2.12961 6.93621H6.12744C7.07024 6.93621 7.90305 6.32198 8.18152 5.42125L9.379 1.5479C9.5678 0.937212 10.4322 0.937216 10.621 1.5479L11.8185 5.42124C12.0969 6.32198 12.9298 6.93621 13.8726 6.93621H17.8284Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
              />
            </svg>
            {i18n.t("headerIcons.4")}
          </MenuItem>
        </Link>
        <Link to="/">
          <MenuItem
            sx={{ display: "flex", gap: "16px" }}
            onClick={handleLogout}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {i18n.t("headerIcons.5")}
          </MenuItem>
        </Link>
      </Menu>
      <ReadmeComponent />

      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export default Profile;
