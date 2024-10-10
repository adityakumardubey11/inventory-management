"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
// Set up the GET route for the dashboard
router.get("/", dashboardController_1.getDashboardMetrices);
exports.default = router;
