import mysql, { type Connection } from "mysql2";

export const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "", //name of user
  password: "",//password
  database: "",//your database gotta create one
});

// make sure you have a table in your database that looks like the types in the type folder


export const connectDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        console.error("Database connection failed:", err.message);
        reject(err);
      } else {
        console.log("Connected to MySQL database");
        resolve();
      }
    });
  });
};
