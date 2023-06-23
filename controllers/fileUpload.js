const File = require("../models/File");
const File2=require("../models/model");
const cloudinary = require('cloudinary').v2;


//localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
    try {

        //fetch filefrom request
        const file = req.files.file;
        console.log("FILE AAGYI JEE -> ",file);


        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path)

        //add path to the move fucntion
        file.mv(path , (err) => {
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });

    }
    catch(error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}

exports.cloudfileupload = async (req, res) => {
    try {
        const { title,
          generalAge,
          femaleAge,
          stScAge,
          obcAge,
          pwdUnreservedAge,
          pwdObcAge,
          exServiceMenAge,
          femaleFee,
          generalFee,
          obcFee,
          ewsFee,
          stScFee,
          pwdObcFee,
          correctionFee1Fee,
          correctionFee2Fee,
          modeOfPaymentFee,
          startDate,
          lastDate,
          shortInfo,
          apply
}=req.body;
console.log(title)
       
        await File.create({
          title,
            generalAge,
            femaleAge,
            stScAge,
            obcAge,
            pwdUnreservedAge,
            pwdObcAge,
            exServiceMenAge,
            femaleFee,
            generalFee,
            obcFee,
            ewsFee,
            stScFee,
            pwdObcFee,
            correctionFee1Fee,
            correctionFee2Fee,
            modeOfPaymentFee,
            startDate,
            lastDate,
            shortInfo,
            apply

        })
            res.status(200).json({
          success: true,
          message:"upload data successfully",


        });
      } catch (error) {
        console.error('Error in uploading  data:', error);
        res.status(500).json({ message: 'Error uploading data' });
      }    

}
exports.admitcard = async (req, res) => {
  try {
      const { title,
        link
}=req.body;
console.log(title)
     
      await File2.create({
        title,
        link
      })
          res.status(200).json({
        success: true,
        message:"upload data successfully",


      });
    } catch (error) {
      console.error('Error in uploading  data:', error);
      res.status(500).json({ message: 'Error uploading data' });
    }    

}

exports.admitcardresult = async (req, res) => {
  try {
      const images = await File2.find({}); // Assuming 'url' is the field containing the image URLs
      res.json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Error fetching images' });
    }
  };

exports.allimages = async (req, res) => {
    try {
        const images = await File.find({}); // Assuming 'url' is the field containing the image URLs
        res.json(images);
      } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Error fetching images' });
      }
    };