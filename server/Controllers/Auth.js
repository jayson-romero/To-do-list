// import { connection } from "../database/db.js"
import { pool } from "../database/db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = (req, res) => {
  
   try{

      pool.getConnection((err, connection) =>{
         if(err) throw err;

          //CHECK USER IF EXIST 
         const q = "SELECT * FROM users WHERE username = ?"
      
         connection.query(q,[req.body.username], (err, data) => {
            if(err) return res.status(500).json(err)
            if(data.length) return res.status(409).json("User already exist")
         
            //CREATE A NEW USER
                  //hash the password
                  const salt = bcrypt.genSaltSync(10)
                  const hashedPasswod = bcrypt.hashSync(req.body.password, salt)

            const q = "INSERT INTO users (`email`,`username`,`password`, `userProfile`) VALUE (?)"
            const vaues = [
               req.body.email,
               req.body.username,
               hashedPasswod,
               req.body.userProfile
            ]  
            connection.query(q,[vaues], (err, data) => {
               if(err) return res.status(500).json(err)
               return res.status(200).send(`User has been created!`)
            
            })
         })

      })

  }catch(err) {
     console.log("Error Register Function", err)
   return false
  }
  

}


export const login = (req, res) => {
   try {

     pool.getConnection((err, connection) => {
        if (err) throw err;

        const q = "SELECT * FROM users WHERE username = ?"

        connection.query(q,[req.body.username], (err, data) => {
           if(err) return res.status(500).json(err)
           if(data.length === 0) return res.status(404).json("User not Found")
  
           const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
  
           if(!checkPassword) return res.status(400).json("Wrong Password or username")
  
  
  
         //JWT  
   
         const token = jwt.sign({ id: data[0].id }, process.env.JWT_KEY);
         const {password, ...others } = data[0]
  
         res.cookie("myCookie", token, {
            expires: new Date(Date.now() + 3600000), // Cookie expires in 1 hour
            //domain: 'example.com', // Set the domain for the cookie
            path: '/', // Set the path for the cookie
            //secure: true, // Set the "Secure" flag to send the cookie only over HTTPS
            httpOnly: true // Set the "HTTP-Only" flag to prevent client-side JavaScript access
         }).status(200).json(others)
        })

     })

     
   } catch (err) {
      console.log("Error in Login", error)
      return false
   }
}

export const logout =  (req, res) => {

    res.clearCookie("myCookie", {
      secure:true,
      sameSite:"none"
   }).status(200).json("User has been logout")
//  try {
//     let token
//     token = await req.cookies.myCookie
//     res.json(token)
//  } catch (error) {
//     console.log(error)
//  }
  
}
