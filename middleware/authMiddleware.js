    const jwt = require("jsonwebtoken") ;

    // <<<< middleware that check user is authenticated or not , if not Then it will give respones "please Login" otherwise it allow you to next page >>>> 

    const authenticate = (req,res,next)=>{
      const token=req.headers.authorization  ;
     console.log( token  ) ;
      if(token){
      const decoded=jwt.verify(token,"aditya") ;
      if(decoded){
      next()
      } else {
      res.send("Please Login")
      }
      } else {
      res.send("Please Login")
      }
      }




    module.exports = { authenticate } ;




   
