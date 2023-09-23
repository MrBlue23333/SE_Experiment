const mysql = require("../../config/db");
const camelCase = require("../utils/camelcase");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
class UserModels {
  async login(body) {
    if (body.username && body.password) {
      let query =
        "select * from user where username=" + '"' + body.username + '"';
      let [row] = await mysql.query(query);
      row = camelCase.convertToCamelCase(row);
      console.log(body);
      console.log(row);
      if (row === undefined) {
        return {
          code: "500",
          msg: "账号错误",
        };
      } else {
        if (row[0].password === body.password) {
          const token = jwt.sign(
            { username: body.username },
            config.development.privateKey,
            { expiresIn: "1d" }
          );
          console.log(token);
          const query = "UPDATE user SET user_last_login_time = ?";
          const values = [new Date()];
          mysql.query(query, values, (error, results, fields) => {
            if (error) {
              console.error("Error updating last_login_time:", error);
              return {
                code: "500",
                msg: "事件更新错误",
              };
            }

            console.log("Last login time updated successfully");
          });
          return {
            code: "200",
            msg: "登录成功",
            token: token,
            userInfo: row[0],
          };
        }
      }
    } else
      return {
        code: "500",
        msg: "请输入正确的账号和密码",
      };
  }
  async logup(body) {
    let query =
      "select * from user where username=" + '"' + body.username + '"';
    let [row] = await mysql.query(query);
    if (row[0]) {
      return {
        code: "403",
        msg: "用户名重复",
      };
    } else {
      let user = {
        username: body.username,
        password: body.password,
      };
      let query = "insert into user ?";
      mysql.query("INSERT INTO user SET ?", user, (error, results, fields) => {
        if (error) {
            console.error("Error inserting user:", error);
        }
    });
    return {
        code: "200",
        msg: "注册成功"
    };
    }
  }
}

module.exports = UserModels;
