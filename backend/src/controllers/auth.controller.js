const userModel = require("../models/user.model")

const jwt = require("jsonwebtoken")

async function register(req, res) {
    try{
        const {username,email,password} = req.body;

        const isUserAlreadyExit = await userModel.findOne({email});
        if(isUserAlreadyExit){
            return res.status(400).json({
                message:"user already exits"
            })
        }
        
        const user = await userModel.create({
            username,email,password
        });

        const token = jwt.sign({
            id:user._id
        },process.env.jwt_SECRET,{expiresIn: "1d"});

        res.cookie("token",token);
        res.status(201).json({
            message:"user registered successfully",
            user
        })
    }catch(error){
        res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
    
}

module.exports = {register};