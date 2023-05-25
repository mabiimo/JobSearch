import React from "react";
import { Link } from "react-router-dom";
import SignInPage from "../../Page/SignInPage";

const NavBar = () => {
  return (
    <div className="navBar max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      ></button>
      <div className="menu flex gap-8">
        <Link to={`/`}>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        </Link>
        <Link to={"companypage"}>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        </Link>

        <Link to={"loginpage"}>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        </Link>
        <Link to={"registerpage"}>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
