# 🎓 Mentor-Student Management System

This project is a web API designed to manage mentors and their assigned students. It enables the assignment of students to mentors, retrieval of students assigned to specific mentors, and updating of mentor-student relationships.

## Table of Contents

- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 🔗 [API Endpoints](#api-endpoints)
- 👨‍🏫 [Mentor Endpoints](#mentor-endpoints)
- 🧑🏻‍🎓 [Student Endpoints](#student-endpoints)
- 🗎  [API Documentation](#api-documentation)
- 🖇️ [Server Deployed URL](#server-deployed-url)

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Ravikeerthy/assign-mentor.git
    cd assign-mentor
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    mongoDBconnectionString=your_mongodb_connection_string
    port=your_port_number
    ```

4. **Start the development server**

    ```bash
    npm start
    ```

## 🔗 API Endpoints

### Mentor Endpoints

#### Create a New Mentor

**Description**: Creates a new mentor.

- **Method**: POST
- **URL**: `/mentors/createnew/mentor`

#### Get All Mentor Details

**Description**: Retrieves details of all mentors.

- **Method**: GET
- **URL**: `/mentors/allmentordetails`

#### Change Mentor

**Description**: Updates a mentor's information.

- **Method**: PATCH
- **URL**: `/mentors/:id/mentor`

**Request Parameters**:

- **Path Parameters**:
  - `id` (string): The unique identifier of the mentor.

#### Get Mentor Assigned

**Description**: Retrieves details of a specific mentor.

- **Method**: GET
- **URL**: `/mentors/:id`

**Request Parameters**:

- **Path Parameters**:
  - `id` (string): The unique identifier of the mentor.

#### Get Students Assigned to a Mentor

**Description**: Retrieves a list of students assigned to a specific mentor.

- **Method**: GET
- **URL**: `/mentors/studentslists/:id`

**Request Parameters**:

- **Path Parameters**:
  - `id` (string): The unique identifier of the mentor.

### 🧑🏻‍🎓 Student Endpoints

#### Create a New Student

**Description**: Creates a new student.

- **Method**: POST
- **URL**: `/students/createnew`

#### Get All Student Details

**Description**: Retrieves details of all students.

- **Method**: GET
- **URL**: `/students/allstudentdetails`

#### Get Previous Mentor

**Description**: Retrieves the previous mentor of a specific student.

- **Method**: GET
- **URL**: `/students/prevmentor/:id`

**Request Parameters**:

- **Path Parameters**:
  - `id` (string): The unique identifier of the student.

#### Update Mentor for a Student

**Description**: Updates the mentor assigned to a specific student.

- **Method**: PUT
- **URL**: `/students/updatementor/:id`

**Request Parameters**:

- **Path Parameters**:
  - `id` (string): The unique identifier of the student.

**Body Parameters**:
  - `mentorId` (string): The unique identifier of the new mentor.

To use the API, ensure you have a running instance of the server. You can interact with the API using tools like Postman or any HTTP client library in your preferred programming language.

## 🗎 API Documentation

For detailed API documentation, please [click here to visit the documentation](https://documenter.getpostman.com/view/36384047/2sA3kdAd89).

## 🖇️ Server Deployed URL

For the deployed server URL, please [click here](https://assign-mentor-yp3i.onrender.com).
