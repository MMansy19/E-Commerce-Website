import ActiveLastBreadcrumb from "../components/common/Link";
import RedButton from "../components/common/RedButton";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="flex flex-col mx-4 md:ml-36 mt-48 gap-20">
      <div className="flex justify-between ">
        <ActiveLastBreadcrumb path="Home/ My Account" />
        <h1 className="text-sm md:mr-44">
          Welcome! <span className="text-red-600">your-name</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-28">
        <nav className="flex flex-col gap-4 text-gray-400">
          <h1 className="text-black text-base font-medium">
            Manage My Account
          </h1>
          <ul>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform  focus:text-red-600"
              >
                My Profile
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform  focus:text-red-600"
              >
                Address Book
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform  focus:text-red-600"
              >
                My Payment Options
              </Link>
            </li>
          </ul>
          <h1 className="text-black text-base font-medium">My Orders</h1>
          <ul>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform  focus:text-red-600"
              >
                My Returns
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform  focus:text-red-600"
              >
                My Cancellations
              </Link>
            </li>
          </ul>
          <h1 className="text-black text-base font-medium">
            <Link
              to="/wishlist"
              className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform "
            >
              My Wishlist
            </Link>
          </h1>
        </nav>
        <div className="shadow  w-[full] flex flex-col py-10 px-20 rounded">
          <div className="flex flex-col gap-6 md:w-[710px]">
            <span className="text-xl font-medium text-red-600">
              Edit Your Profile
            </span>
            <div className="flex flex-col md:flex-row gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-base">First Name</span>
                <input
                  type="text"
                  placeholder="Mahmoud"
                  required
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-base">Last Name</span>
                <input
                  type="text"
                  placeholder="Mansy"
                  required
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-base">Email</span>
                <input
                  type="email"
                  placeholder="mahmoud2abdalfattah@gmail.com"
                  required
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-base">Address</span>
                <input
                  type="text"
                  placeholder="Sharqia, Egypt"
                  required
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-base">Password Changes</span>
              <input
                type="text"
                placeholder="Current Password"
                required
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="text"
                placeholder="New Password"
                required
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="text"
                placeholder="Confirm New Password"
                required
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-base focus:border outline-none focus:border-gray-300  "
              />
            </div>
            <div className="ml-auto flex items-center gap-8 text-base">
              <button className=" hover:underline underline-offset-4  ease-in-out  duration-300 transform hover:-translate-y-1">
                Cancel
              </button>
              <RedButton name="Save Changes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
