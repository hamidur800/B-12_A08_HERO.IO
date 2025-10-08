import { NavLink, useLoaderData } from "react-router";
import google from "../../../public/g-stor.png";
import apple from "../../../public/a-stor.png";
import hero from "../../../public/hero.png";

import React from "react";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
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
                At HERO.IO , we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting.
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

      <div className="">
        <div className="py-10">
          <h2 className="font-bold text-5xl text-center">Trending Apps</h2>
          <h4 className="text-[#627382] text-xl text-center pt-4">
            Explore All Trending Apps on the Market developed by us
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-6 max-w-11/12 mx-auto">
          {data.map((data) => (
            <div key={data.id} className=" bg-white rounded-xl shadow p-3">
              {/* Image Placeholder */}
              <div className="flex items-center justify-center rounded-lg">
                <img src={data.image} alt="" />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-semibold text-gray-800">
                {data.title}
              </h3>

              {/* Footer */}
              <div className="flex justify-between items-center mt-2 text-xs">
                <span className="flex items-center text-green-500 font-semibold">
                  {/* Download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v12m0 0l-3-3m3 3l3-3m-9 7h12"
                    />
                  </svg>
                  {data.downloads}M
                </span>

                <span className="flex items-center text-orange-500 font-semibold">
                  {/* Star icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.283L12 18.896l-7.416 4.521 1.48-8.283-6.064-5.828 8.332-1.151z" />
                  </svg>
                  {data.ratingAvg}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white href=">
            <NavLink>Show All</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
