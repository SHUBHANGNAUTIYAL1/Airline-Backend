import  express from "express";

import { createFlight, getAllFlights, getFlightById } from "../controllers/FlightController.js";

const router=express.Router();

router.post("/create",createFlight)
router.get("/get/:id",getFlightById)
router.get("/",getAllFlights)




export default router