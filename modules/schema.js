const mongoose=require('mongoose');
const bookSchema = new mongoose.Schema({
    title: String,
    decription:String,
    status:String
  });
  
  const Book = mongoose.model('book', bookSchema);
  //SEND SCHEMA
  module.exports ={Book};