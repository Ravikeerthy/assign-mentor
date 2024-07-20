import mentorDetails from "../Models/mentor.schema.js";
import studentsDetails from "../Models/student.schema.js";

// API to create Mentor
export const createNewMentor = async (req, res) => {

  try {
    const mentor = new mentorDetails(req.body);
    await mentor.save();
    res
      .status(200)
      .json({ message: "Mentor Detail is Created", mentors: mentor });
  } catch (error) {
    console.log(error);
  }
};

//Api to get all mentors
export const getAllMentors = async (req, res) => {
  try {
    const mentors = await mentorDetails.find();
    res.status(200).json({ mentorData: mentors });
  } catch (error) {
    console.log(error);
  }
};

// API to get assigned mentor
export const getMentorAssigned = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const studentsMentor = await mentorDetails
      .findById(mentorId)
      .populate("studId");
    console.log("mentors", studentsMentor);
    res
      .status(200)
      .json({message:"Mentor Assigned Successfully", mentorAssigned: studentsMentor.mFirstName});
      
  } catch (error) {
    console.log(error);
  }
};
// API to Assign or Change Mentor for particular Student

export const changeMentor = async (req, res) => {
  try {
    const mentorId = req.params.id;

    const studId = req.body._id;
    
    const updatedMentor = await mentorDetails.findByIdAndUpdate(
      { _id: mentorId },
      {
        $push: { studId: [studId] },
      },
      { new: true }
    );

    if (!updatedMentor) {
      return res.status(400).json({ message: "Student is not found" });
    }
   

    res.status(200).json({ message: "Updated Mentor", updatedMentor });
  } catch (error) {
    res.status(400).json({ message: "Error in update Mentor" });
  }
};


// API to get students for mentor
export const getMentorAssignedStudents = async (req, res) => {
    try {
      const mentorId = req.params.id;
            const studentsMentor = await mentorDetails
        .findById(mentorId)
        .populate("studId");
      console.log("mentors", studentsMentor);
      res
        .status(200)
        .json({message:"Sudents for mentor", mentorAssigned: studentsMentor.mFirstName, StudentsLists : studentsMentor.studId.map((item)=>item.firstName) });
        
    } catch (error) {
      console.log(error);
    }
  };