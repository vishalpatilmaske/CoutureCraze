import dotenv from "dotenv";
import connection from "../backend/src/dbconnection/dbconnect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 4000;

// check database connection
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database:", err.message);
  } else {
    console.log("Connected to mysql database");
  }
});

app.listen(PORT, () => {
  console.log(`server start successfully !${PORT}`);
});
