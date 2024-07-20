import mongoose from 'mongoose';

const studSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    batchName: String,
    contact:Number,
    menId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"mentorDetails"
    }]
});

const studentsDetails = mongoose.model("studentsDetails", studSchema);

export default studentsDetails;