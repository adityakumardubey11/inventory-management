// import { Request, Response } from "express";
// import { PrismaClient } from "@prisma/client/extension";


// const prisma = new PrismaClient();

// export const getDashboardMetrices = async (
//     req: Request,
//     res: Response
// ): Promise<void> => {
//     try {
//         const popularProducts = await prisma.products.findMany({
//             take: 15,
//             orderBy: {
//                 stockQuantity: "desc"
//             }
//         });
//         const saleSummary = await prisma.salesSummary.findMany({
//             take: 5,
//             orderBy: {
//                 date: "desc",
//             },
//         })
//         const purchaseSummary = await prisma.purchaseSummary.findMany({
//             take: 5,
//             orderBy: {
//                 date: "desc",
//             },
//         })
//         const expenseSummary = await prisma.expenseSummary.findMany({
//             take: 5,
//             orderBy: {
//                 date: "desc",
//             },
//         })
//         const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
//             take: 5,
//             orderBy: {
//                 date: "desc"
//             },
//         });
//         const expenseByCategory = expenseByCategorySummaryRaw.map((item: { amount: { toString: () => any; }; }) => ({
//                 ...item,
//                 amount: item.amount.toString(),
//             })
//         );
//            res.json({
//                 popularProducts,
//                 saleSummary,
//                 purchaseSummary,
//                 expenseSummary,
//                 expenseByCategorySummaryRaw,
//             })
//         } catch (error) {
//             res.status(500).json({ message: "Error retrieving dashboard metrics" });
//           }
//         };
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"; // No need to use the extension if not necessary

const prisma = new PrismaClient();

export const getDashboardMetrices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const popularProducts = await prisma.products.findMany({
      take: 15,
      orderBy: {
        stockQuantity: "desc",
      },
    });
    const saleSummary = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const purchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseSummary = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    // Format amount as string for consistency in response
    const expenseByCategory = expenseByCategorySummaryRaw.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));

    res.json({
      popularProducts,
      saleSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategory,
    });
  } catch (error) {
    console.error("Error retrieving dashboard metrics:", error); // log the error
    res.status(500).json({ message: "Error retrieving dashboard metrics" });
  }
};
