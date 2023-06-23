const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    link:{
        type:String,
        required:true
    }
});

const File = mongoose.model("File2", fileSchema);
module.exports = File;