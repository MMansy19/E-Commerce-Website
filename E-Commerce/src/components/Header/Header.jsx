import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center md:mt-8 my-4">
        <Logo />
        <Navigations />
        <div className="flex">
          <SearchAppBar />
          <Profile />
        </div>
      </div>
      <hr className="w-full border-gray-300 md:mt-4" />
    </>
  );
};

export default Header;
