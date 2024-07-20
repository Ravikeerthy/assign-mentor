import studentsDetails from "../Models/student.schema.js";
import mentorDetails from "../Models/mentor.schema.js";

// API to create a new student
export const createNewStudents = async (req, res) => {
    try {
    const student = new studentsDetails(req.body);
    await student.save();
    res
      .status(200)
      .json({ message: "Student Detail is created", students: student });
  } catch (error) {
    res.status(500).json({ message: "Error creating student" });
  }
};

// API to get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentsDetails.find();
    res.status(200).json({ studentsData: students });
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
};


export const getPreviousMentor = async(req,res) =>{
try {
  const studentId = req.params.id;
  const student = await studentsDetails.findById(studentId).populate("menId");
  
  const previousMentor = student.menId;
  if(!student){
    res.status(400).json({message:"Mentor Not Found"});
  }
  res.status(200).json({message:"Previous Mentor", previousMentor });

} catch (error) {
  res.status(500).json({message:"Error in fetching Mentor"})
}
};

export const mentorAdd = async(req, res) =>{
  try {
    const studentId = req.params.id;
    const {menId} = req.body;

    const addedMentor = await studentsDetails.findByIdAndUpdate(
      studentId,
      {$push:{menId:[menId]}},
      {new:true}
    );
    if (!addedMentor) {
      return res.status(400).json({ message: "Student is not found" });
    }
    res.status(200).json({message:"Mentor Assigned to Student:", addedMentor})
  } catch (error) {
    res.status(500).json({ message: "Error assigning Mentor" });
  }
}
