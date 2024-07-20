import express from 'express';
import { changeMentor, createNewMentor, getAllMentors, getMentorAssigned, getMentorAssignedStudents } from '../Controllers/mentor.controller.js';

const mentorRouter = express.Router();

mentorRouter.post('/createnew/mentor', createNewMentor);
mentorRouter.get('/allmentordetails', getAllMentors);
mentorRouter.patch('/:id/mentor', changeMentor);
mentorRouter.get('/:id', getMentorAssigned);
mentorRouter.get('/studentslists/:id', getMentorAssignedStudents)

export default mentorRouter;