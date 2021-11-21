import mysql from "mysql2";

// create the connection to database
const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_express",
});

export default DB;
