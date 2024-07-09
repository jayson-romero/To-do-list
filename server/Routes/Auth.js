import  express  from "express";
import { login, logout, register } from "../Controllers/Auth.js";
import { protect } from "../middleware/authMiddleware.js";
const  router  =  express.Router()



router.post('/register', register)
router.post('/login', login)
router.post('/logout',protect, logout)

export default router