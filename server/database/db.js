import mysql2 from "mysql2"
export const connection = mysql2.createConnection({
   host: "localhost",
   user:"root",
   password:"iton1218",
   database: 'to-do-list'
})