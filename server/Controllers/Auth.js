import { connection } from "../database/db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = (req, res) => {
  try{
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

  }catch(err) {
     console.log("Error Register Function", err)
   return false
  }
  

}


export const login = (req, res) => {
   try {
      const q = "SELECT * FROM users WHERE username = ?"

      connection.query(q,[req.body.username], (err, data) => {
         if(err) return res.status(500).json(err)
         if(data.length === 0) return res.status(404).json("User not Found")

         const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

         if(!checkPassword) return res.status(400).json("Wrong Password or username")



       //JWT  
 
       const token = jwt.sign({ id: data[0].id }, "secret_key");
       const {password, ...others } = data[0]

       res.cookie("accessToken", token, {
          httpOnly : true,
       }).status(200).json(others)
      })
   } catch (err) {
      console.log("Error in Login", error)
      return false
   }
}

export const logout = (req, res) => {
   res.clearCookie("accessToken", {
      secure:true,
      sameSite:"none"
   }).status(200).json("User has been logout")
}

