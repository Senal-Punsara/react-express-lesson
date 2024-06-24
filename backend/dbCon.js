import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config()

var dbConnectionInfo = {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

var dbConnection = mysql.createPool(
    dbConnectionInfo
);

export default dbConnection;