import express from 'express';
import { createNewStudents, getAllStudents, getPreviousMentor, mentorAdd  } from '../Controllers/student.controller.js';


const studrouter = express.Router();

studrouter.post('/createnew', createNewStudents);
studrouter.get('/allstudentdetails', getAllStudents);
studrouter.get('/prevmentor/:id', getPreviousMentor);
studrouter.put("/updatementor/:id", mentorAdd)



export default studrouter;

