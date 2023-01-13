const express = require("express") ;
const { connection } = require("./configs/db");
require("dotenv").config()  ;
const app = express() ;
const {userRouter} = require("./Routes/userRoute") ;
const { noteRouter } = require("./Routes/noteRoute") ;
const { authenticate } = require("./middleware/authMiddleware") ;
app.use(  express.json()) ;
app.get("/" , (req , res)=>{
    res.send("welcome") ;
    })

app.use("/user" , userRouter ) ;
app.use( authenticate ) ;
app.use("/note" , noteRouter ) ;

app.listen(process.env.port , async ()=>{
try{
    await connection ;
    console.log("Connect to <<< DB >>>") ;

}catch(err){
    console.log("not able to connect <<< DB >>>") ;
}
console.log("server 2080") ;
})
