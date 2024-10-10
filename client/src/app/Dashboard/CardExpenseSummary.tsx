// import {
//   ExpenseByCategorySummary,
//   useGetDashboardMetricsQuery,
//   useGetExpensesByCategoryQuery
// } from "@/state/api";
// import { TrendingUp } from "lucide-react";
// //import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
// import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// import { useMemo, useState } from "react";

// type AggregatedDataItem = {
//   name: string;
//   color?: string;
//   amount: number;
// };

// type AggregatedData = {
//   [category: string]: AggregatedDataItem;
// };

// const CardExpenseSummary = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const {
//     data: expensesData,
//     isLoading,
//     isError,
//   } = useGetExpensesByCategoryQuery();
//   const expenses = useMemo(() => expensesData ?? [], [expensesData]);

//   const parseDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toISOString().split("T")[0];
//   };

//   const aggregatedData: AggregatedDataItem[] = useMemo(() => {
//     const filtered: AggregatedData = expenses
//       .filter((data: ExpenseByCategorySummary) => {
//         const matchesCategory =
//           selectedCategory === "All" || data.category === selectedCategory;
//         const dataDate = parseDate(data.date);
//         const matchesDate =
//           !startDate ||
//           !endDate ||
//           (dataDate >= startDate && dataDate <= endDate);
//         return matchesCategory && matchesDate;
//       })
//       .reduce((acc: AggregatedData, data: ExpenseByCategorySummary) => {
//         const amount = parseInt(data.amount);
//         if (!acc[data.category]) {
//           acc[data.category] = { name: data.category, amount: 0 };
//           acc[data.category].color = `#${Math.floor(
//             Math.random() * 16777215
//           ).toString(16)}`;
//           acc[data.category].amount += amount;
//         }
//         return acc;
//       }, {});

//     return Object.values(filtered);
//   }, [expenses, selectedCategory, startDate, endDate]);

//   const classNames = {
//     label: "block text-sm font-medium text-gray-700",
//     selectInput:
//       "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
//   };

//   if (isLoading) {
//     return <div className="py-4">Loading...</div>;
//   }

//   if (isError || !expensesData) {
//     return (
//       <div className="text-center text-red-500 py-4">
//         Failed to fetch expenses
//       </div>
//     );
//   }



//   return (
    
//     <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
//       {isLoading ? (
//         <div className="m-5">Loading...</div>
//       ) : (
      
//         <div>
//           {/* HEADER */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
//               Expense Summary
//             </h2>
//             <hr />
//           </div>      
//             {/* CHART */}
//             <div className="relative basis-3/5 justify-between ">
//               <ResponsiveContainer width="100%" height={400}>
//                 <PieChart>
//                   <Pie
//                     data={aggregatedData}
//                     cx="50%"
//                     cy="50%"
//                     label
//                     outerRadius={150}
//                     fill="#8884d8"               
//                     dataKey="amount"
//                     onMouseEnter={(_, index) => setActiveIndex(index)}
//                   >
//                       {aggregatedData.map(
//                   (entry: AggregatedDataItem, index: number) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={
//                         index === activeIndex ? "rgb(29, 78, 216)" : entry.color
//                       }
//                     />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//                 <div>
//             <hr />
            
//               <div className="mt-3 flex justify-between items-center px-7 mb-4">
//                 <div className="pt-2">
//                   <p className="text-sm">
//                     Average:{" $8334567.3 "}
//                     <span className="font-semibold">
                      
//                     </span>
//                   </p>
//                 </div>
//                 <span className="flex items-center mt-2">
//                   <TrendingUp className="mr-2 text-green-500" />
//                   30%
//                 </span>
//               </div>
//               </div>
//               </ResponsiveContainer>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
//                 <span className="font-bold text-xl">
                  
//                 </span>
//               </div>
//             </div>
//             {/* LABELS */}
//             <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
              
//                 <li
                 
//                   className="flex items-center text-xs"
//                 >
//                   <span
//                     className="mr-2 w-3 h-3 rounded-full"
                   
//                   ></span>
                 
//                 </li>
             
//             </ul>
          
//           </div>
       
//       //  </div>
//       )
//     };
    
//     </div>
//    );
  
// };

// export default CardExpenseSummary;



// Real Code for this 


// import {
//   ExpenseByCategorySummary,
//   useGetDashboardMetricsQuery,
// } from "@/state/api";
// import { TrendingUp } from "lucide-react";
// import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

// type ExpenseSums = {
//   [category: string]: number;
// };

// const colors = ["#00C49F", "#0088FE", "#FFBB28"];

// const CardExpenseSummary = () => {
//   const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

//   const expenseSummary = dashboardMetrics?.expenseSummary[0];

//   const expenseByCategorySummary =
//     dashboardMetrics?.expenseByCategorySummary || [];

//   const expenseSums = expenseByCategorySummary.reduce(
//     (acc: ExpenseSums, item: ExpenseByCategorySummary) => {
//       const category = item.category + " Expenses";
//       const amount = parseInt(item.amount, 10);
//       if (!acc[category]) acc[category] = 0;
//       acc[category] += amount;
//       return acc;
//     },
//     {}
//   );

//   const expenseCategories = Object.entries(expenseSums).map(
//     ([name, value]) => ({
//       name,
//       value,
//     })
//   );

//   const totalExpenses = expenseCategories.reduce(
//     (acc, category: { value: number }) => acc + category.value,
//     0
//   );
//   const formattedTotalExpenses = totalExpenses.toFixed(2);

//   return (
//     <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
//       {isLoading ? (
//         <div className="m-5">Loading...</div>
//       ) : (
//         <>
//           {/* HEADER */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
//               Expense Summary
//             </h2>
//             <hr />
//           </div>
//           {/* BODY */}
//           <div className="xl:flex justify-between pr-7">
//             {/* CHART */}
//             <div className="relative basis-3/5">
//               <ResponsiveContainer width="100%" height={140}>
//                 <PieChart>
//                   <Pie
//                     data={expenseCategories}
//                     innerRadius={50}
//                     outerRadius={60}
//                     fill="#8884d8"
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                   >
//                     {expenseCategories.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={colors[index % colors.length]}
//                       />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
//                 <span className="font-bold text-xl">
//                   ${formattedTotalExpenses}
//                 </span>
//               </div>
//             </div>
//             {/* LABELS */}
//             <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
//               {expenseCategories.map((entry, index) => (
//                 <li
//                   key={`legend-${index}`}
//                   className="flex items-center text-xs"
//                 >
//                   <span
//                     className="mr-2 w-3 h-3 rounded-full"
//                     style={{ backgroundColor: colors[index % colors.length] }}
//                   ></span>
//                   {entry.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* FOOTER */}
//           <div>
//             <hr />
//             {expenseSummary && (
//               <div className="mt-3 flex justify-between items-center px-7 mb-4">
//                 <div className="pt-2">
//                   <p className="text-sm">
//                     Average:{" "}
//                     <span className="font-semibold">
//                       ${expenseSummary.totalExpenses.toFixed(2)}
//                     </span>
//                   </p>
//                 </div>
//                 <span className="flex items-center mt-2">
//                   <TrendingUp className="mr-2 text-green-500" />
//                   30%
//                 </span>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CardExpenseSummary;

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type ExpenseByCategorySummary = {
  category: string;
  amount: string;
};

type DashboardMetrics = {
  expenseSummary: { totalExpenses: number }[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
};

type ExpenseSums = {
  [category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const mockData: DashboardMetrics = {
  expenseSummary: [{ totalExpenses: 500.75 }],
  expenseByCategorySummary: [
    { category: "Office", amount: "200" },
    { category: "Professional", amount: "150" },
    { category: "Salaries", amount: "150.75" },
  ],
};

const CardExpenseSummary = () => {
  const [dashboardMetrics, setDashboardMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate fetching data from API (replace this part with real API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay for loading
        setTimeout(() => {
          setDashboardMetrics(mockData); // Use mock data for testing
          setIsLoading(false);
        }, 1000); // Simulate network latency
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dashboardMetrics) {
      console.log("Fetched Data:", dashboardMetrics);
    }
  }, [dashboardMetrics]);

  if (!dashboardMetrics || isLoading) {
    return <div>Loading data...</div>;
  }

  const expenseSummary = dashboardMetrics?.expenseSummary?.[0];
  const expenseByCategorySummary = dashboardMetrics?.expenseByCategorySummary || [];

  if (!expenseSummary || !expenseByCategorySummary.length) {
    return <div>No data available</div>;
  }

  // Sum the expenses by category
  const expenseSums = expenseByCategorySummary.reduce((acc: ExpenseSums, item: ExpenseByCategorySummary) => {
    const category = `${item.category} Expenses`;
    const amount = parseFloat(item.amount); // Ensure the amount is parsed as a float
    if (!acc[category]) acc[category] = 0;
    acc[category] += amount;
    return acc;
  }, {});

  const expenseCategories = Object.entries(expenseSums).map(([name, value]) => ({
    name,
    value,
  }));

  const totalExpenses = expenseCategories.reduce((acc, category) => acc + category.value, 0);
  const formattedTotalExpenses = totalExpenses.toFixed(2);

  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      <>
        {/* HEADER */}
        <div>
          <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Expense Summary</h2>
          <hr />
        </div>
        {/* BODY */}
        <div className="xl:flex justify-between pr-7">
          {/* CHART */}
          <div className="relative basis-3/5">
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={expenseCategories}
                  innerRadius={50}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
              <span className="font-bold text-xl">
                ${formattedTotalExpenses}
              </span>
            </div>
          </div>
          {/* LABELS */}
          <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
            {expenseCategories.length > 0 ? (
              expenseCategories.map((entry, index) => (
                <li key={`legend-${index}`} className="flex items-center text-xs">
                  <span className="mr-2 w-3 h-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }}></span>
                  {entry.name}
                </li>
              ))
            ) : (
              <p>No Categories Found</p>
            )}
          </ul>
        </div>
        {/* FOOTER */}
        <div>
          <hr />
          {expenseSummary && (
            <div className="mt-3 flex justify-between items-center px-7 mb-4">
              <div className="pt-2">
                <p className="text-sm">
                  Average:{" "}
                  <span className="font-semibold">
                    ${expenseSummary.totalExpenses.toFixed(2)}
                  </span>
                </p>
              </div>
              <span className="flex items-center mt-2">
                <TrendingUp className="mr-2 text-green-500" />
                30%
              </span>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default CardExpenseSummary;
