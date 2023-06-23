//app create
const express = require("express");
const app = express();
//PORt find krna h 
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());


//middleware add krne h 
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//db se connect krnah 
const db = require("./config/database");
db.connect();

//cloud se connect krna h 
// const cloudinary = require("./config/cloudinary");
// cloudinary.cloudinaryConnect();

//api route mount krna h 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

app.use("/",(req,res)=>{
    res.json({message:"Hello this is working"})
})
//activate server
app.listen(PORT,"0.0.0.0", () => {
    console.log(`App is running at ${PORT}`);
})