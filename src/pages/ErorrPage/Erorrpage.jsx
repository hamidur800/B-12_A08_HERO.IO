import React, { Component } from "react";
import error from "../../../public/error-404.png";
import { NavLink } from "react-router";

export class Erorrpage extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col items-center py-10">
          <div className="">
            <img src={error} alt="" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-semibold text-5xl text-center text-[#001931] py-1">
              Oops, page not found!
            </h2>
            <h4 className="text-xl text-center text-[#627382] pb-1">
              The page you are looking for is not available.
            </h4>
            <NavLink className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white">
              Go Back!
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Erorrpage;
