import React from "react";
import googles from "../../../public/g-stor.png";
import { Link, useLoaderData, useParams } from "react-router";

const Install = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  // const inDeta = data.find((app) => app.id === appId);
  console.log("aii ja amii", appId, data);
  return (
    <div className="bg-[#D9D9D9]">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center max-w-11/12 mx-auto py-10">
          <h2 className="font-bold text-5xl">Your Installed Apps</h2>
          <h4 className="text-xl text-[#627382] pt-2">
            Explore All Trending Apps on the Market developed by us
          </h4>
        </div>
        <div className="max-w-11/12 mx-auto flex justify-between items-center py-5">
          <h2 className="font-semibold text-2xl">() Apps Found</h2>
          <div className="">
            <details className="dropdown">
              <summary className="btn m-1">Sort By Size</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
        </div>

        <div className="pb-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-sm">
            <div className="flex items-center">
              <div className="mr-5">
                <img className="h-16 rounded-sm shadow" src={googles} alt="" />
              </div>
              <div className="">
                <h2>Forest: Focus for Productivity</h2>
                <div className="flex items-center mt-2 text-xs">
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
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#00D390] text-white py-2 px-4 rounded-sm">
                Uninstall
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
