const express = require('express');
const router = express.Router();

const { 
    medicineType,
    getmedicineType,
    updatemedicineType,
    deletemedicineType
} = require ("../Controller/medicineTypeCtrl");



// medicine routes 
router.post("/medicineType", medicineType);
router.get("/getmedicineType", getmedicineType);
router.patch("/updatemedicineType/:_id", updatemedicineType);
router.delete("/delete",deletemedicineType);



const {
    pharamaType,
//updatePharamaType,
updatePharamaTypes,
    getpharamaType,
    deletePharmaType
} = require("../Controller/pharmaTypectrl");

// pharma routes

router.post("/pharamaType",pharamaType);
router.get("/getpharamaType",getpharamaType);
router.patch("/updatePharamaType/:uhid",updatePharamaTypes);
router.delete("/:_id/deletePharmaType",deletePharmaType);


// room routes

const{
    roomType,
    updateroomTypes,
    getroomType,
    deleteroomType
} = require("../Controller/roomCtrl");


router.post("/roomType",roomType);
router.patch("/updateroomTypes",updateroomTypes);
router.get("/getroomType", getroomType);
router.delete("/deleteroomType",deleteroomType);


// ipd Vital

const{
    createdipdVital,
    getipdVital,
    updateipdVital,
    deleteipdVital
}=  require ("../Controller/ipdvitalctrl");

router.post("/createdipdVital/:ipdID", createdipdVital);
router.get("/getipdVital/:ipdID",getipdVital);
router.patch("/updateipdVital/:_id",updateipdVital);
router.delete("/deleteipdVital/:_id",deleteipdVital);

// ipd

const{
    createdipd,
} = require("../Controller/ipdCtrl");

router.post("/createdipd",createdipd);


//advance booking

const{
    cretaedadvanceBooking,
    getadvanceBooking,
    updateadvanceBooking,
    deleteadvanceBooking
} = require("../Controller/advanceBookingCtrl")

router.post("/cretaedadvanceBooking", cretaedadvanceBooking);
router.get("/getadvanceBooking/:ipdID", getadvanceBooking);
router.patch("/updateadvanceBooking/:_id",updateadvanceBooking);
router.delete("/deleteadvanceBooking/:_id",deleteadvanceBooking);






 
module.exports = router;




