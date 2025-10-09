import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

export default function App() {
  const data = useLoaderData();
  return (
    <div className="">
      <div className="text-center max-w-11/12 mx-auto py-10">
        <h2 className="font-bold text-5xl">Our All Applications</h2>
        <h4 className="text-xl text-[#627382] pt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </h4>
      </div>
      <div className="max-w-11/12 mx-auto flex justify-between items-center py-5">
        <h2 className="font-semibold text-2xl">({data.length}) Apps Found</h2>
        <div className="">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-11/12 mx-auto pb-5">
        {data.map((data) => (
          <div key={data.id} className="">
            <Link to={`/Appdetails/${data.id}`}>
              <div className=" bg-white rounded-xl shadow p-3">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
