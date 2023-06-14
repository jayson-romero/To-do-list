import  express  from "express";
import { retrieveToDoList, addToDoList, updateToDoList, deleteToDoList } from "../Controllers/Posts.js";

const router  =  express.Router()


router.post('/retrieve/:id', retrieveToDoList)
router.post('/add/:id', addToDoList)
router.put('/update/:id', updateToDoList)
router.delete('/delete/:id', deleteToDoList)

export default router