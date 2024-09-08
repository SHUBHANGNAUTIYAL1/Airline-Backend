import  express from "express";

import { payment } from "../controllers/Payment.js";

const router=express.Router();

router.post("/create",payment)
export default router