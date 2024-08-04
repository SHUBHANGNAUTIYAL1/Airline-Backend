import  express from "express";
import { register,login, AllUser, getAllRetailers, getAllGovernment } from "../controllers/authController.js";

const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/",AllUser);
router.get("/retailers",getAllRetailers);
router.get("/governments",getAllGovernment);


export default router