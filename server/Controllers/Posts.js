// import { connection } from "../database/db.js"
import { pool } from "../database/db.js"

export const retrieveToDoList = (req, res) => {
   try {

      pool.getConnection((err, connection) => {
         if(err) throw err;

         const q = "SELECT * FROM list WHERE user_id = ?"
            
         connection.query(q,[req.params.id], (err, data) => {
            if(err) return res.status(404).json(err)
            
            return res.status(200).json(data)
         })  
      })
    
   } catch (error) {
      console.log("error in selecting all", error)
      return false
   }
  
}
export const addToDoList = (req, res) => {   
      try {

         pool.getConnection((err, connection) => {
            if(err) throw err;

         const q = "INSERT INTO list (`user_id`,`title`) value (?)"
         const value = [
            req.params.id,
            req.body.title,
         ]

         connection.query(q,[value], (err, data) => {
            if(err) return res.status(404).json(err)

            return res.status(200).send(`List has been created!`)
         })
         })
         
      } catch (error) {
         console.log("error with adding list", error)
         return false
      }
   
}
export const updateToDoList = (req, res) => {

   try {
      pool.getConnection((err, connection) => {
         if(err) throw err;

         const listID = req.params.id
         const q = "UPDATE list SET `title` = ? WHERE list_id = ? "
         const values = [
            req.body.title
         ]
         connection.query(q,[...values, listID], (err, data) => {
            if(err) return res.status(404).json(err)
            return res.status(202).json("list has been updated")
         })
      })
   } catch (error)    {
      console.log("error with controller", error)
      return false
   }
}

export const deleteToDoList = (req, res) => {
   try {
      pool.getConnection((err, connection) => {
         if(err) throw err;

         const q = "DELETE FROM list WHERE list_id = ?"

         connection.query(q,[req.params.id], (err, data) => {
            if(err) return res.status(404).json(err)

            return res.status(200).json("list has been deleted")
         })

      })
        
   } catch (error) {
      console.log("error with controller", error)
      return false
   }
}