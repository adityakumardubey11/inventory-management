// import { useGetDashboardMetricsQuery } from "@/state/api";
// import { TrendingUp } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const CardSalesSummary = () => {
//   const { data, isLoading, isError } = useGetDashboardMetricsQuery();
//   const salesData = data?.salesSummary || [];

//   const [timeframe, setTimeframe] = useState("weekly");

//   const totalValueSum =
//     salesData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

//   const averageChangePercentage =
//     salesData.reduce((acc, curr, _, array) => {
//       return acc + curr.changePercentage! / array.length;
//     }, 0) || 0;

//   const highestValueData = salesData.reduce((acc, curr) => {
//     return acc.totalValue > curr.totalValue ? acc : curr;
//   }, salesData[0] || {});

//   const highestValueDate = highestValueData.date
//     ? new Date(highestValueData.date).toLocaleDateString("en-US", {
//         month: "numeric",
//         day: "numeric",
//         year: "2-digit",
//       })
//     : "N/A";
//     console.log(salesData);
//   if (isError) {
//     return <div className="m-5">Failed to fetch data</div>;
//   }

//   return (
//     <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
//       {isLoading ? (
//         <div className="m-5">Loading...</div>
//       ) : (
//         <>
//           {/* HEADER */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
//               Sales Summary
//             </h2>
//             <hr />
//           </div>

//           {/* BODY */}
//           <div>
//             {/* BODY HEADER */}
//             <div className="flex justify-between items-center mb-6 px-7 mt-5">
//               <div className="text-lg font-medium">
//                 <p className="text-xs text-gray-400">Value</p>
//                 <span className="text-2xl font-extrabold">
//                   $
//                   {(totalValueSum / 1000000).toLocaleString("en", {
//                     maximumFractionDigits: 2,
//                   })}
//                   m
//                 </span>
//                 <span className="text-green-500 text-sm ml-2">
//                   <TrendingUp className="inline w-4 h-4 mr-1" />
//                   {averageChangePercentage.toFixed(2)}%
//                 </span>
//               </div>
//               <select
//                 className="shadow-sm border border-gray-300 bg-white p-2 rounded"
//                 value={timeframe}
//                 onChange={(e) => {
//                   setTimeframe(e.target.value);
//                 }}
//               >
//                 <option value="daily">Daily</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="monthly">Monthly</option>
//               </select>
//             </div>
//             {/* CHART */}
//             <ResponsiveContainer width="100%" height={350} className="px-7">
//               <BarChart
//                 data={salesData}
//                 margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
//               >
//                 <CartesianGrid strokeDasharray="" vertical={false} />
//                 <XAxis
//                   dataKey="date"
//                   tickFormatter={(value) => {
//                     const date = new Date(value);
//                     return `${date.getMonth() + 1}/${date.getDate()}`;
//                   }}
//                 />
//                 <YAxis
//                   tickFormatter={(value) => {
//                     return `$${(value / 1000000).toFixed(0)}m`;
//                   }}
//                   tick={{ fontSize: 12, dx: -1 }}
//                   tickLine={false}
//                   axisLine={false}
//                 />
//                 <Tooltip
//                   formatter={(value: number) => [
//                     `$${value.toLocaleString("en")}`,
//                   ]}
//                   labelFormatter={(label) => {
//                     const date = new Date(label);
//                     return date.toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     });
//                   }}
//                 />
//                 <Bar
//                   dataKey="totalValue"
//                   fill="#3182ce"
//                   barSize={10}
//                   radius={[10, 10, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* FOOTER */}
//           <div>
//             <hr />
//             <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
//               <p>{salesData.length || 0} days</p>
//               <p className="text-sm">
//                 Highest Sales Date:{" "}
//                 <span className="font-bold">{highestValueDate}</span>
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CardSalesSummary;


import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
  // Fetch data from API
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const [salesData, setSalesData] = useState([]);

  // Mock data for testing (remove this once the API works)
  const mockData = [
    { date: "2024-03-12", totalValue: 2000000, changePercentage: 3 },
    { date: "2024-02-16", totalValue: 1500000, changePercentage: -2 },
    { date: "2024-02-23", totalValue: 1000000, changePercentage: 1 },
    { date: "2024-01-23", totalValue: 500000, changePercentage: -1.5 },
    { date: "2024-01-08", totalValue: 6000000, changePercentage: 8 },
  ];

  // Use mock data temporarily if real data isn't fetched
  useEffect(() => {
    if (data && data.salesSummary) {
      setSalesData(data.salesSummary);
    } else {
      setSalesData(mockData); // For testing purposes
    }
  }, [data]);

  const [timeframe, setTimeframe] = useState("weekly");

  // Calculate the total value sum of sales
  const totalValueSum = salesData.reduce((acc, curr) => acc + (curr.totalValue || 0), 0);

  // Calculate the average percentage change
  const averageChangePercentage = salesData.length
    ? salesData.reduce((acc, curr) => acc + (curr.changePercentage || 0), 0) / salesData.length
    : 0;

  // Find the highest value sales data
  const highestValueData = salesData.reduce(
    (acc, curr) => (acc.totalValue > curr.totalValue ? acc : curr),
    salesData[0] || {}
  );

  // Format the highest value date
  const highestValueDate = highestValueData?.date
    ? new Date(highestValueData.date).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : "N/A";

  // Error handling if data fails to fetch
  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  // Loading state
  if (isLoading) {
    return <div className="m-5">Loading...</div>;
  }

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        {/* HEADER */}
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Sales Summary</h2>
        <hr />
      </div>

      {/* BODY */}
      <div>
        {/* BODY HEADER */}
        <div className="flex justify-between items-center mb-6 px-7 mt-5">
          <div className="text-lg font-medium">
            <p className="text-xs text-gray-400">Value</p>
            <span className="text-2xl font-extrabold">
              ${totalValueSum.toLocaleString("en", { maximumFractionDigits: 2 })}m
            </span>
            <span className="text-green-500 text-sm ml-2">
              <TrendingUp className="inline w-4 h-4 mr-1" />
              {averageChangePercentage.toFixed(2)}%
            </span>
          </div>
          <select
            className="shadow-sm border border-gray-300 bg-white p-2 rounded"
            value={timeframe}
            onChange={(e) => {
              setTimeframe(e.target.value);
            }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* CHART */}
        <ResponsiveContainer width="100%" height={350} className="px-7">
          <BarChart
            data={salesData}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getMonth() + 1}/${date.getDate()}`;
              }}
            />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}m`}
              tick={{ fontSize: 12, dx: -1 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString("en")}`]}
              labelFormatter={(label) => {
                const date = new Date(label);
                return date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
              }}
            />
            <Bar
              dataKey="totalValue"
              fill="#3182ce"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* FOOTER */}
      <div>
        <hr />
        <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
          <p>{salesData.length || 0} days</p>
          <p className="text-sm">
            Highest Sales Date: <span className="font-bold">{highestValueDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSalesSummary;
