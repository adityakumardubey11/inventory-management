import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

// Set up the GET route for the dashboard
router.get("/", getUsers);

export default router;