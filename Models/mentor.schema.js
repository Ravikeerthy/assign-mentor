import mongoose from 'mongoose';


const mentorSchema = mongoose.Schema({
    mFirstName:String,
    mLastName:String,
    memail:String,
    mContact:Number,
    studId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"studentsDetails"
    }]


});

const mentorDetails = mongoose.model('mentorDetails', mentorSchema);

export default mentorDetails;