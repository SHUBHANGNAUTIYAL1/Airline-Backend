import  express from "express";


import { createBooking, deleteAllBookings, getBookingById, getBookingsByUserId, getBookingsByUserId2 } from "../controllers/BookingController.js";

const router=express.Router();

router.post("/create",createBooking)
router.get("/get/:id",getBookingById)
router.get("/user/:id",getBookingsByUserId)
router.get("/airline/:id",getBookingsByUserId2)
router.delete("/flight/",deleteAllBookings)




export default router