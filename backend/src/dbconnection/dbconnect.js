import mysql from "mysql";
import dotenv from "dotenv";

// Path for envoirment variable
dotenv.config({
  path: "./.env",
});

// Data base connection with mysql
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export default connection;
