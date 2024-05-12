// Header.jsx
import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";
const Header = () => {
  return (
    <header
      dir="ltr"
      className="fixed top-12 md:top-14 left-0 w-full z-50 bg-white shadow-md"
    >
      <div className="flex justify-between xl:justify-around items-center sm:px-8 px-2 py-1 md:py-2">
        <Logo />
        <Navigations />
        <div className="flex justify-center items-center md:gap-2">
          <SearchAppBar />
          <Profile />
        </div>
      </div>
      <hr className="w-full border-gray-300 md:hidden" />
    </header>
  );
};

export default Header;
