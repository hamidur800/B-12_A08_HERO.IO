import { Star, Download, Users } from "lucide-react";

import { Link, useLoaderData, useParams } from "react-router";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Appdetails() {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const sDeta = data.find((app) => app.id === appId);
  console.log(sDeta);

  const { ratings } = sDeta;
  console.log(ratings);
  const chartData = ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));
  return (
    <div className="bg-[#D9D9D9]">
      <div className="py-6 max-w-11/12 mx-auto">
        {/* Card Header */}
        <div className="py-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* App Icon */}
          <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
            <img
              className="rounded-xl shadow-xl w-full h-full object-cover"
              src={sDeta.image}
              alt={sDeta.title}
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {sDeta.companyName}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">productive.io</span>
            </p>

            <div className="border border-[#001931] my-3"></div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-start gap-4 md:gap-10 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-green-600" />
                <span>{sDeta.downloads}M</span>
                <span className="text-gray-500">Downloads</span>
              </div>

              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>{sDeta.ratingAvg}</span>
                <span className="text-gray-500">Average Ratings</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <span>{sDeta.reviews}K</span>
                <span className="text-gray-500">Total Reviews</span>
              </div>
            </div>

            <button className="mt-5 px-6 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-all">
              Install Now ({sDeta.size} MB)
            </button>
          </div>
        </div>

        <div className="w-full h-full sm:h-[400px] md:h-full lg:h-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                type="number"
                stroke="#9CA3AF"
                tickFormatter={(v) => v.toLocaleString()}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke="#9CA3AF"
                tick={{ fontSize: 14 }}
              />
              <Tooltip
                formatter={(value) => `${value.toLocaleString()} ratings`}
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
              />
              <Bar
                dataKey="value"
                fill="#FF9900"
                barSize={20}
                radius={[5, 5, 5, 5]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Description */}
        <div className="mt-6 p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-3">
            Description
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <h4>
              This focus app takes the proven Pomodoro technique and makes it
              even more practical for modern lifestyles. Instead of just setting
              a timer, it builds a complete environment for deep work,
              minimizing distractions and maximizing concentration. Users can
              create custom work and break intervals, track how many sessions
              they complete each day, and review detailed statistics about their
              focus habits over time...
            </h4>

            <h4>
              A unique feature of this app is the integration of task lists with
              timers. You can assign each task to a specific Pomodoro session,
              making your schedule more structured. The built-in analytics show
              not only how much time you’ve worked but also which tasks consumed
              the most energy...
            </h4>

            <h4>
              For people who struggle with procrastination, the app provides
              motivational streaks and achievements. Compelling multiple
              Pomodoro sessions unlocks milestones, giving a sense of
              accomplishment...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
