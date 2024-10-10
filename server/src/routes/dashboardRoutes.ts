import { Router } from "express";
import { getDashboardMetrices } from "../controllers/dashboardController";

const router = Router();

// Set up the GET route for the dashboard
router.get("/", getDashboardMetrices);

export default router;


