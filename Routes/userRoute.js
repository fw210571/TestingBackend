const express = require("express") ;
const { AuthModel } = require("../models/authmodel") ;
const jwt = require("jsonwebtoken") ;
const bcrypt = require("bcrypt") ;
const userRouter = express.Router() ; 


userRouter.post("/signin"  , async (req , res)=>{
    const  {  name , email , password , number   } = req.body ;
    try{
        bcrypt.hash(password , 3 , async (error , ePass )=>{
 
         try{
           const user = new AuthModel({  name , email , password:ePass , number }) ;
           await user.save() ;
           res.send( "Data saved ....") ;
         }catch(error){
           res.send( "Error in ecypting the data" ) ;
         }
        })
    }catch(err){
     res.send("err in signin")
    }
 })
 
 
 
 userRouter.post("/login" , async (req , res)=>{
     const {email , password } = req.body ;
     
     

    //  try{
      const user = await AuthModel.findOne({email : email}) ;

      //checking user exist or not
      if( user ){

        //checking Password
        bcrypt.compare(password, user.password , (err, result)=> {
          if( err){
            res.send({"msg" : "password is wrong"})
          }else {

             //if password is true then give token to the user
             const token = jwt.sign({ payload : "Aditya" } , "aditya" ) ;
             res.send( {"msg":"Logged in Successfully" , "token" : token})

          }
      });
      }else {
          res.send({"msg":"User dosn't Exist"}) ;     
      }
      
    //  }catch(err){
    //   res.send({"msg" : "not able to Login" , "error" : err})
    //  }
 
   
 })
 
 
 
 
 userRouter.get("/data" , async (req , res)=>{
    
   var token=req.headers.authorization ;
     
   //veryfyng the token is correct or not if yes then we can access the data 
   await jwt.verify(token, "aditya", (err, decoded) => { 
    
    if( err ) {
      res.send( {"msg" : err }) ;
    }else {
      res.send( {"msg" : "Data  is yours" ,  "token" : token }   ) ;

    }
    } );

 })

 
module.exports = {  userRouter  } ;