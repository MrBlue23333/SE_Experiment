const express=require("express")
const cors=require("cors")
const config=require("../config/config")
const console = require('console')
const router=require("./routes/index");
const bodyParser=require("body-parser");
const port=config.development.serve.port
const app=express();
app.use(cors());  //解决跨域问题

app.use(bodyParser.urlencoded({ extended: false })); // url请求
app.use(bodyParser.json()); // json请求

app.use("/",router); //所有的请求

app.listen(port,()=>console.log(`开始监听${port}端口`))
