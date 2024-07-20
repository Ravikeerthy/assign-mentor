import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studrouter from './Routers/student.router.js';
import mentorRouter from './Routers/mentor.router.js';
import connectDB from './DataBase/dbconfig.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>{
    res.status(200).send(`<div style="text-align: center; background-color:rgb(243, 177, 209);  padding: 10px;">
        <h1>Assign the Mentors to the students</h1>
    </div>
    <div>
        <h1>For Mentor</h1>
        <h3>Base API: <a href="">http://localhost:4000/api/mentor</a> </h3>
        <ul>
            <li>
                <h3><mark>Post:</mark> Use the endpoint to <mark>/createnew/mentor</mark> to Create the Mentor</h3>
            </li>

            <li>
                <h3><mark>Get:</mark> Change the endpoint to <mark>/allmentordetails</mark> to Get all Mentors</h3>
            </li>

            <li>
                <h3><mark>Put:</mark> Change the endpoint to <mark>/:id/mentor</mark> to Assign the mentor to the
                    students</h3>
            </li>

            <li>
                <h3><mark>Get:</mark> Change the endpoint to <mark>/studentslists/:id</mark> to get the all students
                    list with mentor-id</h3>
            </li>

        </ul>
    </div>
    <hr>
    </hr>

    <div>
        <h1>For Student</h1>
        <h3>Base API: <a href=""> http://localhost:4000/api/student</a></h3>
        <ul>
            <li>
                <h3><mark>Post:</mark> Use the endpoint to <mark>/createnew</mark> to Create a Student</h3>
            </li>

            <li>
                <h3><mark>Get:</mark> Change the endpoint to <mark>/allstudentdetails</mark> to Get all the Students</h3>
            </li>

            <li>
                <h3><mark>Put:</mark> Change the endpoint to <mark>/updatementor/:id</mark> to Assign a students to the mentor
                </h3>
            </li>

            <li>
                <h3><mark>Get:</mark> Change the endpoint to <mark>/prevmentor/:id</mark> to get Previous Assigned
                    Student Mentor</h3>
            </li>

        </ul>
    </div>`)
});

app.use('/api/student', studrouter);
app.use('/api/mentor', mentorRouter);

connectDB();

app.listen(process.env.port, ()=>{
    console.log("App is listening in the port:", process.env.port);
})