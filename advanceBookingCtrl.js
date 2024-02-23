const advanceBookingmodel = require("../model/advanceBookingmodel");


const IPD = require("../model/ipdModel");


exports.cretaedadvanceBooking = async(req,res) =>{
    const { ipdID } = req.params;

    const newadvanceBookingData = req.body;
  
    try {
      const findPatient = await IPD.findOne({ ipdID: ipdID });
  
      if (!findPatient) {
        res.status(404).json({ message: "Patient not found" });
        return;
      }
  
      const newadvanceBookingDetails = new advanceBookingmodel({
        ...newadvanceBookingData,
        ipdID: findPatient.ipdID,
        patientID: findPatient._id,
        uhid: findPatient._id,
        datefrom: Date.now(),
        dateto: Date.now()
      });


        const  cretaedadvanceBooking =  await newadvanceBookingDetails.save();

        findPatient.advanceBooking.push(cretaedadvanceBooking._id)
         await findPatient.save();
  
      res.status(201).json({
        message: "advance booking created successfully",
        advanceBooking: cretaedadvanceBooking ,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.massage });
    }
  };




exports.getadvanceBooking=async(req,res)=>{
    const { ipdID } = req.params;

    try {
        const advanceBooking = await advanceBookingModel.find({ ipdID: ipdID });
        res.status(200).json({success:true, data:advanceBooking});
    } catch (error) {
        console.log(error);
    }
};

exports.updateadvanceBooking=async(req,res) => {
    const _id = req.params;
    const newadvanceBookingData = req.body;
    
  
    try {
        
        const updateadvanceBookingType = await advanceBookingmodel.findByIdAndUpdate(_id, newadvanceBookingData); 
        
        if (! updateadvanceBookingType) {
            return res.status(404).json({success: false, message: 'Document not found'});
        }
  
        res.status(200).json({success: true, data: updateadvanceBookingType});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'An error occurred'});
    }
  };


  exports.deleteadvanceBooking = async(req,res) => {
    const _id = req.params;
    const newadvanceBookingData = req.body;
    
  
    try {
        
        const deleteadvanceBookingType = await advanceBookingmodel.findByIdAndDelete(_id, newadvanceBookingData); 
        
        if (! deleteadvanceBookingType) {
            return res.status(404).json({success: false, message: 'Document not found'});
        }
  
        res.status(200).json({success: true, data: deleteadvanceBookingType});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'An error occurred'});
    }
  };





