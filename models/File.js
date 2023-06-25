const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    generalAge:{
        type:Number,
        min:0,
        max:100
        // required:true,
    },
    femaleAge:{
        type:Number,
        min:0,
        max:100
    },
    stScAge:{
        type:Number,
        min:0,
        max:100
    },
   
    obcAge:{
        type:Number,
        min:0,
        max:100
    },
    pwdUnreservedAge:{
        type:Number,
        min:0,
        max:100
    },
    
    pwdObcAge:{
        type:Number,
        min:0,
        max:100
    },
    
    exServiceMenAge:{
        type:Number,
        min:0,
        max:100
    },
    femaleFee:{
        type:Number,
    },
    generalFee:{
        type:Number,
    },
    obcFee:{
        type:Number,
    },
    ewsFee:{
        type:Number,
    },
    stScFee:{
        type:Number,
    },
    pwdObcFee:{
        type:Number,
    },
    correctionFee1Fee:{
        type:Number,
    },
    correctionFee2Fee:{
        type:Number,
    },
    modeOfPaymentFee:{
        type:String,
        type: String,
        enum: ['Cash', 'Credit Card', 'Online Payment']
    },
    startDate:{
        type:String,
        minlength: 10,
        maxlength: 10
    },
    lastDate:{
        type:String,
        minlength: 10,
        maxlength: 10
    },
    shortInfo:{
        type:String,
    },
    apply:{
        type: String,
        validate: {
          validator: function(value) {
            // Custom validation logic using a regular expression
            // Return true if the URL is valid, false if not
            const urlPattern = /^(http|https):\/\/[^ "]+$/.test(value);
            return urlPattern;
          },
          message: 'Invalid URL format'
        }
    }
    
    
    // email:{
    //     type:String,
    // }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;