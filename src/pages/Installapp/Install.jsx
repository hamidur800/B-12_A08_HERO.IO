import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Install() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(installedApps);
  }, []);

  const handleDelete = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("🗑️ App Uninstalled Successfully!");
  };

  if (apps.length === 0) {
    return (
      <h2 className="text-center text-gray-500 py-20">
        No apps installed yet.
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 grid grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="bg-white shadow rounded-xl p-3">
          <img src={app.image} alt={app.title} className="rounded-md" />
          <h3 className="mt-3 font-semibold text-lg">{app.title}</h3>
          <button
            onClick={() => handleDelete(app.id)}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
}
