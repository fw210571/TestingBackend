const  mongoose  = require("mongoose");

const authSchema = mongoose.Schema({
    name : String ,
    email : String ,
    password : String 
})


const AuthModel = mongoose.model("authCollection" , authSchema  ) ;

module.exports = { AuthModel } ;

