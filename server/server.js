import  express  from "express";
const app = express();
import authRoutes from "./Routes/Auth.js";
import postsRoutes from "./Routes/Posts.js";
import cors from "cors"
import cookieParser from "cookie-parser";


//MIDDLEWARE 
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use('/api/users', authRoutes)
app.use('/api/posts', postsRoutes)


const PORT =  3001   
app.listen( PORT, (req, res) => {
   console.log(`Connected! `)
})