const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    generalAge:{
        type:String,
        // required:true,
    },
    femaleAge:{
        type:String,
    },
    stScAge:{
        type:String,
    },
   
    obcAge:{
      type:String,
    },
    pwdUnreservedAge:{
        type:String,
    },
    
    pwdObcAge:{
        type:String,
    },
    
    exServiceMenAge:{
        type:String,
    },
    femaleFee:{
        type:String,
    },
    generalFee:{
        type:String,
    },
    obcFee:{
        type:String,
    },
    ewsFee:{
        type:String,
    },
    stScFee:{
        type:String,
    },
    pwdObcFee:{
        type:String,
    },
    correctionFee1Fee:{
        type:String,
    },
    correctionFee2Fee:{
        type:String,
    },
    modeOfPaymentFee:{
        type:String,
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
    },
    minimumAge:{
        type:String,
    },
    maximumAge:{
        type:String,
    },
    totalvacancy:{
        type:String,

    },
    officalLink:{
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