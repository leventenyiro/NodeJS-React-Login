const mysql = require("mysql")
const dbConfig = require("../config/db.config")

var conn = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

module.exports = conn