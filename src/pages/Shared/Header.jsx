import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Log out successful");
      })
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        {user?.email ? (
          <>
            <Link to="/add-service">Add Service</Link>
            <Link to="/my-review">My Review</Link>
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white border-0 "
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/Login">Login</Link>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          PHOTOGRAPHY KING
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
