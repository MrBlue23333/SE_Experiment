const UserModels=require("../models/UserModels")

class UserController{
    constructor(){
        this.userModels=new UserModels();
    }
    async login(req,res){
        try{
            const loginDto=await this.userModels.login(req.body);
            res.status(200).send(loginDto);
        }catch(error){
            console.log(error);
            res.status(500).send("登陆失败");
        }
    }
    async logup(req,res){
        try{
            const result=await this.userModels.logup(req.body);
            console.log(result)
            res.status(200).send(result);
        }catch(error){
            res.status(500).send("登陆注册");
        }
    }
}

module.exports=UserController;