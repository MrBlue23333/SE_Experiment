module.exports={
    development:{   //开发环境配置
        database:{
            host:"198.211.24.118",
            port:3306,
            user:"root",
            password:"15908136150ll",
            database:"score_management",
        },
        serve:{
            port:50000,
        },
        privateKey:"baobao"
    },
    production:{  //生产环境环境配置
        database:{
            host:"198.211.24.118",
            port:3306,
            user:"baobao",
            password:"",
            database:"score_management",
        },
        serve:{
            port:process.env.PORT || 80,
        },
        privateKey:"baobao"
    }
}