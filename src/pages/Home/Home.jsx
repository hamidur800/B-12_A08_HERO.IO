import React, { Component } from "react";
import { NavLink } from "react-router";
import google from "../../../public/g-stor.png";
import apple from "../../../public/a-stor.png";
import hero from "../../../public/hero.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#D2D2D2] pt-[80px]">
          <div className=" max-w-11/12 mx-auto">
            <div className="">
              <h1 className="text-5xl text-center font-bold text-[#001931] pb-4 lg:text-7xl">
                <span>We Build</span>
                <br /> <span className="gradient-text">Productive</span> Apps
              </h1>
              <h4 className="text-center text-[#627382]">
                <span>
                  At HERO.IO , we craft innovative apps designed to make
                  everyday life simpler, smarter, and more exciting.
                </span>
                <br />
                <span>
                  Our goal is to turn your ideas into digital experiences that
                  truly make an impact
                </span>
              </h4>

              <div className="flex items-center justify-center gap-6 py-10">
                <NavLink
                  className="flex items-center border border-[#e6e6e6] p-2 rounded-[4px]"
                  to="https://play.google.com/"
                >
                  <span className="mr-2">
                    <img className="h-8 w-8" src={google} alt="" />
                  </span>
                  <span>Google Play</span>
                </NavLink>
                <NavLink
                  className="flex items-center border border-[#e6e6e6] p-2 rounded-[4px]"
                  to="https://www.apple.com/app-store/"
                >
                  <span className="mr-2">
                    <img className="h-8 w-8" src={apple} alt="" />
                  </span>
                  <span>App Store</span>
                </NavLink>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="">
                <img src={hero} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#6B2FE4] to-[#9D60F2] text-white py-16">
            <div className="max-w-6xl mx-auto text-center px-6">
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-12">
                Trusted By Millions, Built For You
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div>
                  <p className="text-gray-200 mb-2">Total Downloads</p>
                  <h3 className="text-5xl font-bold">29.6M</h3>
                  <p className="text-sm mt-2 text-gray-300">
                    21% More Than Last Month
                  </p>
                </div>

                {/* Card 2 */}
                <div>
                  <p className="text-gray-200 mb-2">Total Reviews</p>
                  <h3 className="text-5xl font-bold">906K</h3>
                  <p className="text-sm mt-2 text-gray-300">
                    46% More Than Last Month
                  </p>
                </div>

                {/* Card 3 */}
                <div>
                  <p className="text-gray-200 mb-2">Active Apps</p>
                  <h3 className="text-5xl font-bold">132+</h3>
                  <p className="text-sm mt-2 text-gray-300">
                    31 More Will Launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
