import 'dotenv/config'

import mysql from "mysql"

export const pool  = mysql.createPool({
  host            : process.env.HOST,
  user            : process.env.USER,
  password        : process.env.PASSWORD,
  database        : process.env.DATABASE
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log("connected with Database");
});


// export const connection = mysql.createConnection({
//    host: process.env.HOST,
//    user: process.env.USER,
//    password: process.env.PASSWORD,
//    database: process.env.DATABASE
// })



// Attempt to connect to the MySQL database
// connection.connect((error) => error ? console.log(error) : console.log("MysqlDB connected..!"));
 
 // Close the MySQL connection
//  connection.end();

//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true

//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true