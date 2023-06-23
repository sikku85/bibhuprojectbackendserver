const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    generalAge:{
        type:Number,
        // required:true,
    },
    femaleAge:{
        type:Number,
    },
    stScAge:{
        type:Number,
    },
   
    obcAge:{
        type:Number,
    },
    pwdUnreservedAge:{
        type:Number,
    },
    
    pwdObcAge:{
        type:Number,
    },
    
    exServiceMenAge:{
        type:Number,
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
    },
    startDate:{
        type:String
    },
    lastDate:{
        type:String,
    },
    shortInfo:{
        type:String,
    },
    apply:{
        type:String,
        required:true,
    }
    
    
    // email:{
    //     type:String,
    // }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;