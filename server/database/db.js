import mysql from "mysql"
export const connection = mysql.createConnection({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE
})


//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true

//mysql://b3cdf016d20657:7dde82e7@us-cdbr-east-06.cleardb.net/heroku_6b329626b734521?reconnect=true