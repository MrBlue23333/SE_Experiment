const express=require("express");
const UserController=require("../controllers/UserController")
const router=express.Router()

const userController=new UserController()
router.post("/login",(req,res)=>{
    userController.login(req,res);
})
router.post("/logup",(req,res)=>{
    userController.logup(req,res);
})

module.exports=router