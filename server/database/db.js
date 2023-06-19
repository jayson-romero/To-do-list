import 'dotenv/config'

import mysql2 from "mysql2"
export const connection = mysql2.createConnection({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE
})



// Attempt to connect to the MySQL database
try {
   connection.connect();
   console.log('Connected to MySQL database');
 } catch (error) {
   console.error('Error connecting to MySQL database:', error);
 }
 
 // Close the MySQL connection
 connection.end();

//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true

//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true