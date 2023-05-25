import { Connection } from "mysql2";

export {};
const mysql = require("mysql2");
require("dotenv").config();
let db: Connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
});

console.log("db connected");

module.exports = function queryPromise(query: string) {
  return new Promise((resolve, reject) => {
    db?.query(query, (error: any, results: any) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};
