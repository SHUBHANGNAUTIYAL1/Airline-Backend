import  express from "express";

import { createFlight, getFlightById } from "../controllers/FlightController.js";

const router=express.Router();

router.post("/create",createFlight)
router.get("/get/:id",getFlightById)




export default router