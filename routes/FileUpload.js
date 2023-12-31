const express = require("express");
const router = express.Router();

const {localFileUpload,cloudfileupload,allimages,admitcard,admitcardresult,updateData,deleteFile} = require("../controllers/fileUpload");

//api route
router.post("/localFileUpload",localFileUpload );
router.post("/cloudfileupload",cloudfileupload );
router.post("/admitcard",admitcard);
router.get("/admitcardresult",admitcardresult);
router.get("/allimages",allimages );
router.patch("/updateData",updateData);
router.post("/deleteFile",deleteFile);





module.exports = router;