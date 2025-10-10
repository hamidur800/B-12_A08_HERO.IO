import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Install() {
  const [apps, setApps] = useState([]);

  // Load installed apps
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(installedApps);
  }, []);

  // Delete app
  const handleDelete = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("🗑️ App Uninstalled Successfully!");
  };

  const [sortOrder, setSortOrder] = useState("default");

  const handleSort = (order) => {
    setSortOrder(order);
    console.log("Sorting by:", order);
    let sorted = [...apps];

    if (order === "low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    } else if (order === "high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    }

    setSortOrder(order);
    setApps(sorted);
  };

  if (apps.length === 0) {
    return (
      <h2 className="text-center text-gray-500 py-20">
        No apps installed yet.
      </h2>
    );
  }

  return (
    <div className="bg-[#D9D9D9]">
      <div className="max-w-11/12 mx-auto py-10">
        <div className="text-center max-w-11/12 mx-auto py-10">
          <h2 className="font-bold text-5xl">Your Installed Apps</h2>
          <h4 className="text-xl text-[#627382] pt-2">
            Explore All Trending Apps on the Market developed by us
          </h4>
        </div>
        {/* Sort Bar */}
        <div className="flex justify-between items-center mb-6 max-w-11/12 mx-auto">
          <h2 className="text-2xl font-semibold">{apps.length} Apps Found</h2>

          <div className="dropdown dropdown-start">
            {/* Dropdown Button */}
            <div
              tabIndex={0}
              role="button"
              className="border rounded-lg px-3 py-2 text-gray-700 cursor-pointer w-36 flex items-center justify-between"
            >
              {sortOrder === "low-high" ? (
                "Low → High"
              ) : sortOrder === "high-low" ? (
                "High → Low"
              ) : (
                <>
                  Sort By
                  <FaArrowCircleDown className="" />
                </>
              )}
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow"
            >
              <li>
                <button
                  onClick={() => handleSort("low-high")}
                  className={`${sortOrder === "low-high" ? "bg-blue-100" : ""}`}
                >
                  Low → High
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSort("high-low")}
                  className={`${sortOrder === "high-low" ? "bg-blue-100" : ""}`}
                >
                  High → Low
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Installed Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-11/12 mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white flex justify-between items-center shadow-xl rounded-xl p-3"
            >
              <div className="flex items-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-md h-20 "
                />
                <div className="ml-2">
                  <h3 className="ml-1 font-semibold text-lg mb-2">
                    {app.companyName}
                  </h3>

                  <div className="flex gap-1.5">
                    <span className="flex items-center text-[#00D390] font-semibold">
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
                      {app.downloads}M
                    </span>
                    <span className="flex items-center text-[#FF8811] font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.283L12 18.896l-7.416 4.521 1.48-8.283-6.064-5.828 8.332-1.151z" />
                      </svg>
                      {app.ratingAvg}
                    </span>

                    <span className="flex items-center text-[#627382] font-semibold">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => handleDelete(app.id)}
                  className="px-4 py-2 bg-[#00D390] text-white rounded-lg hover:bg-[#0e815c]"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
