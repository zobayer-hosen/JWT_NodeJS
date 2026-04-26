const express = require("express")
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register",authController.register, (req,res)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
})

router.get("/test",(req,res)=>{
    console.log("Cookie:",req.cookies)
    res.json({
        message:"Test route",
        cookies:req.cookies
    })
})

module.exports = router;