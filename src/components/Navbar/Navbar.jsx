import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
          `mx-4 text-lg ${
            isActive
              ? "btn btn-outline btn-success font-semibold"
              : "text-gray-700"
          } `
        }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SignIn"
          className={({ isActive }) =>
                    `mx-4 text-lg ${
                      isActive
                        ? "btn btn-outline btn-success font-semibold"
                        : "text-gray-700"
                    } `
                  }
        >
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SignUp"
          className={({ isActive }) =>
          `mx-4 text-lg ${
            isActive
              ? "btn btn-outline btn-success font-semibold"
              : "text-gray-700"
          } `
        }
        >
          Sign Up
        </NavLink>
      </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FireBase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"><li>
        <NavLink
          to="/"
          className={({ isActive }) =>
                    `mx-4 text-lg ${
                      isActive
                        ? "btn btn-outline btn-success font-semibold"
                        : "text-gray-700"
                    } `
                  }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SignIn"
          className={({ isActive }) =>
                    `mx-4 text-lg ${
                      isActive
                        ? "btn btn-outline btn-success font-semibold"
                        : "text-gray-700"
                    } `
                  }
        >
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SignUp"
          className={({ isActive }) =>
                    `mx-4 text-lg ${
                      isActive
                        ? "btn btn-outline btn-success font-semibold"
                        : "text-gray-700"
                    } `
                  }
        >
          Sign Up
        </NavLink>
      </li></ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
