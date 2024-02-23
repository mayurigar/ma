const mongoose=require ('mongoose');

const advancebookingSchema = new mongoose.Schema({
    datefrom:{
        type:Number,
        default: Date.now()
    },
    dateto:{
        type:Number,
        default: Date.now()
    },
    department:{
        type:Number,
    },
    mode:{
        type:Number,
    },
    user:{
        type:String,
    },
    uhid:{
        type:String,
        ref:"ipd.uhID"
    }
});


 module.exports = mongoose.model('advanceBooking',advancebookingSchema);