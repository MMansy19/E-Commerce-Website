import ActiveLastBreadcrumb from "../components/common/components/Link";
import { Link } from "react-router-dom";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { auth, firestore } from "../Auth/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useState, useEffect } from "react";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(firestore, "users", userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setAddress(userData.address);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      // Update user account data in Firestore
      await setDoc(doc(firestore, "users", auth.currentUser.uid), {
        firstName,
        lastName,
        email,
        address,
      });
      setMessage("Account details updated successfully!");
      setOpen(true);
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="flex flex-col mx-4 md:ml-36 mt-48 gap-20 justify-center md:justify-between ">
      <div className="flex justify-between   flex-col gap-4 md:flex-row ">
        <ActiveLastBreadcrumb path="Home/ My Account" />
        <h1 className="text-sm md:mr-44">
          Welcome!{" "}
          <span className="text-red-600">
            {firstName} {lastName}
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-28">
        <nav className="flex flex-col gap-4 text-gray-400">
          <h1 className="text-black text-sm md:text-base  font-medium">
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
          <h1 className="text-black text-sm md:text-base  font-medium">
            My Orders
          </h1>
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
          <h1 className="text-black text-sm md:text-base  font-medium">
            <Link
              to="/wishlist"
              className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform "
            >
              My Wishlist
            </Link>
          </h1>
        </nav>
        <div className="shadow  w-[full] flex flex-col py-10 md:px-20 px-5 rounded">
          <div className="flex flex-col gap-6 md:w-[710px]">
            <span className="text-xl font-medium text-red-600">
              Edit Your Profile
            </span>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">First Name</span>
                <input
                  type="text"
                  placeholder={firstName ? firstName : "your first name"}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">Last Name</span>
                <input
                  type="text"
                  placeholder={lastName ? lastName : "your last name"}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">Email</span>
                <input
                  type="email"
                  placeholder={email ? email : "your email"}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">Address</span>
                <input
                  type="text"
                  placeholder={address ? address : "your address"}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sm md:text-base ">Password Changes</span>
              <input
                type="text"
                placeholder="Current Password"
                required
                onChange={(e) => setCurrentPassword(e.target.value)}
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="text"
                placeholder="New Password"
                required
                onChange={(e) => setNewPassword(e.target.value)}
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
              />
              <input
                type="text"
                placeholder="Confirm Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base  focus:border outline-none focus:border-gray-300  "
              />
            </div>
            <div className="ml-auto flex items-center gap-8 text-sm md:text-base ">
              {/* Cancel and save changes buttons */}
              <button
                onClick={() => {
                  // Reset form values
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setAddress("");
                  setCurrentPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
                className="hover:underline underline-offset-4  ease-in-out  duration-300 transform hover:-translate-y-1"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="text-sm md:text-lg bg-red-600 text-white px-6 md:px-12 py-3 rounded hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px] focus:translate-y-0"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Snackbar for displaying success or error messages */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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

export default Account;
