import User from "../models/user.js"
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken";
export const register=async (req,res,next)=>{

    
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            role:req.body.role,
        })
        await newUser.save()
        return res.status(200).json({message:"user has been created",newUser})
    } catch (err) {
        next(err)
        
    }
};

export const login= async (req,res,next)=>{
    try {
        const user=await User.findOne({email: req.body.email})
        if(!user) return next(createError(404,"user not found!"))
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if (!isPasswordCorrect)
        {
            return next(createError(400, "Wrong password or username!"));}
        const token=jwt.sign({id:user._id},process.env.JWT);
        
        const { password, ...otherDetails} =user._doc;
        res.cookie("access_token",token,{
        httpOnly:true,
        })
        .status(200).json({...otherDetails});
    } catch (err) {
        next(err);
        
    }
   
    };

    export const AllUser=async (req,res,next)=>{
        try {
            //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
            console.log("hi")
            const user= await User.find();
            
            return res.status(200).json({user});
        } catch (err) {
            next(err)
            
        }
    } 

    export const getAllRetailers = async (req, res, next) => {
        try {
            const retailers = await User.find({role:'retailer' });
            return res.status(200).json({ message: "Retailers retrieved successfully", retailers });
        } catch (err) {
            next(err);
        }
    };
    
    export const getAllGovernment = async (req, res, next) => {
        try {
            const governments = await User.find({role:'government' });
            return res.status(200).json({ message: "Government retrieved successfully", governments });
        } catch (err) {
            next(err);
        }
    };
