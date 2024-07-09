// import jwt from 'jsonwebtoken';

// import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.myCookie;

  if (token) {
        console.log(token)
      
   //  try {

   //    res.json(token)
   //    // const decoded = jwt.verify(token, process.env.JWT_KEY);

   //    // req.user = await User.findById(decoded.userId).select('-password');

   //    // next();
   //  } catch (error) {
   //    console.error(error);
   //    // res.status(401);
   //    // throw new Error('Not authorized, token failed');
   //  }
  } else {
   console.log("somthing wrong")
  }
};

export { protect };
