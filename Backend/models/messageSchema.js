import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
   name:{
     type: String,
     required: [true, "Name Required"],
     minLength: [3, "Name must contain at least 3 characters!"],
   },
   email:{
     type: String, 
     required:[true, "Email Required"],
     validate: [validator.isEmail,"please provide valid email!"],
   },


   subject: {
       type: String, 
       required: [true, "subject Required ! "],
       minLength: [5, "subject must contain at least 5  characters !"],


   },

   message: {
       type: String,
       required: [true, "message required! "],
       minLength: [10,  "message must contain at least 3 characters "],


   },




});


export const Message = mongoose.model("Message", messageSchema); 



