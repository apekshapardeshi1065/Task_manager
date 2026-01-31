# Task Management Web Application

## Overview
This is a **Full-Stack Task Management Web Application** that allows users to **create, view, update, and delete tasks**. It is built using **Node.js, Express, MongoDB, and Vanilla JavaScript**, with a clean and responsive UI.  

This project was created as part of a **Full Stack Development Internship Skill Assessment**, demonstrating skills in frontend, backend, database handling, REST API design, and responsive UI development.


## Features

### Frontend
- Responsive UI using **HTML, CSS, JavaScript**
- Task List page displaying all tasks
- Add Task form with fields:
  - **Title** (required)
  - **Description** (optional)
  - **Status** (Pending, Completed)
- Edit and Delete functionality for tasks
- Filter tasks by status: **All, Pending, Completed**

### Backend
- **Node.js + Express** REST API
- CRUD operations for tasks
- MongoDB database connection using **Mongoose**
- Environment variables for sensitive data (`.env` file)

### Additional Features
- `.gitignore` configured for **node_modules** and **.env**
- Responsive design for mobile and desktop
- Proper form validation and error handling
- Smooth UI interactivity (edit, complete, delete tasks dynamically)

## Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Frontend     | HTML, CSS, JavaScript       |
| Backend      | Node.js, Express.js         |
| Database     | MongoDB                     |
| Version Control | Git, GitHub              |


## Folder Structure
```
WEB/
├── backend/
│ ├── models/
│ │ └── Task.js
│ ├── node_modules/ # Ignored in Git
│ ├── routes/
│ │ └── tasks.js
│ ├── .env # Ignored in Git
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── .gitignore
└── README.md
```

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/apekshapardeshi1065/Task_manager.git
cd Task_manager/backend
```

2. **Install dependencies**
```
npm install
```
3. **Create a .env file in the backend folder**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Run the backend server**
```
npm start
```

5. **Open frontend**

- Open frontend/index.html in your browser
- Or serve it using a local server (Live Server in VS Code)

6. **Future Enhancements**

- User authentication & authorization

- Task priority and due date feature

- Deployment on Heroku / Vercel / Netlify

- Unit and integration testing

- Dark mode / improved UI design
