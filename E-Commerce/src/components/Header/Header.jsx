// Header.jsx
import React from "react";
import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";

const Header = () => {
  return (
    <header className="fixed top-12 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-around items-center px-4 md:px-8 py-2">
        <Logo />
        <Navigations />
        <div className="flex">
          <SearchAppBar />
          <Profile />
        </div>
      </div>
      <hr className="w-full border-gray-300 md:hidden" />
    </header>
  );
};

export default Header;
