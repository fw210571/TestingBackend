const express = require("express") ;

const noteRouter = express.Router() ;
const { NoteModel } = require("../models/noteModel") ;




noteRouter.get("/" , async (req , res)=>{
    let  note = req.query ;
    try{
        const data = await NoteModel.find(note) ;
        res.send( data ) ;

    }catch(err){
         res.send("msg error") ;
    }
} )

noteRouter.post("/create" , async (req , res)=>{
    const data = req.body ;
    try{
        const note = new NoteModel(data) ;
        await note.save() ;
        res.send( "data has been saved") ;
    }catch(err){
        res.send("data not saved please correct error") ;
    }
} )


noteRouter.patch("/update/:id" , async (req , res)=>{
    const ID = req.params.id ;
    const data = req.body ;
   // const  note = await NoteModel.findOne({"_id":ID}) ;
   // const userID_In_notes = note.userID ;

    try{
           await NoteModel.findByIdAndUpdate({_id:ID} , data) ;
           res.send( "data has been updated") ;
    }catch(err){
        res.send("data not updated please correct error") ;
    }
} )


noteRouter.delete("/delete/:id" , async (req , res)=>{
    const ID = req.params.id ;
   

    try{
           await NoteModel.findByIdAndDelete({_id:ID}) ;
           res.send( "data has been Deleted") ;
    }catch(err){
        res.send("data not Deleted please correct error") ;
    }
} )



module.exports = { noteRouter } ;