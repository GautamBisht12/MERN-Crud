const mongoose = require('mongoose');

const datapattern = new mongoose.Schema({

    name:{
        type:String,
   
      },
      email:{
        type: String,
        
      },
      phone:{
        type:Number,
        
      },
      age:{
        type:Number,
       
      },
     address:{
      type:String
     }
  
});





const userData = new mongoose.model("crud",datapattern);
module.exports = userData;