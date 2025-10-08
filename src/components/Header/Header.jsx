import React, { Component } from "react";
import logo from "../../../public/logo.png";
import { Links, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar max-w-11/12 mx-auto bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"App"}>Apps</NavLink>
                </li>
                <li>
                  <NavLink to={"Install"}>Installation</NavLink>
                </li>
              </ul>
            </div>
            <NavLink to={"/"} className="flex items-center">
              {" "}
              <img className=" h-10 w-10 " src={logo} alt="HERO.IO-LOGO" />
              <span className="gradient-text text-lg font-bold ml-3 lg:text-[16px]">
                HERO.IO
              </span>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"App"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"Install"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink
              className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white"
              to="https://github.com/hamidur800/hamidur800"
            >
              <div className="flex items-center gap-1">
                <FaGithub />
                <span>Contribute</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
