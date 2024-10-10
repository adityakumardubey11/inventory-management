import { Router } from "express";

import { getProducts, createProduct } from "../controllers/productController";

const router = Router();

// Set up the GET route for the dashboard
router.get("/", getProducts);
router.post("/", createProduct)

export default router;