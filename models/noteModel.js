const mongoose =require("mongoose") ;

const noteSchema = mongoose.Schema({
    title : String ,
    auther : String ,
    price : Number 
}) ;

const NoteModel = mongoose.model( "NoteCollection" ,  noteSchema  ) ;

module.exports = { NoteModel } ;