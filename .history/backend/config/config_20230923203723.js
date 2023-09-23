module.exports={
    development:{   //开发环境配置
        database:{
            host:"localhost",
            port:3306,
            user:"root",
            password:"15908136150ll",
            database:"swifttalk",
        },
        serve:{
            port:50000,
        },
        privateKey:"baobao"
    },
    production:{  //生产环境环境配置
        database:{
            host:"192.168.101.3",
            port:3306,
            user:"baobao",
            password:"12345678",
            database:"swifttalk",
        },
        serve:{
            port:process.env.PORT || 80,
        },
        privateKey:"baobao"
    }
}