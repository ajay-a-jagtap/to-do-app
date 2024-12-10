           To-Do App Documentation

1. Project Overview
This project is a To-Do List App built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to manage tasks with a simple interface to add, view, and delete tasks.

2. Tech Stack
•	Frontend: React.js (with Vite for a faster development experience)
•	Backend: Node.js, Express.js
•	Database: MongoDB
•	Tools & Libraries:
    o	Axios (for HTTP requests)
    o	CSS (custom styling)
    o	Vite (bundling)

3. Features
•	Add new tasks.
•	View all tasks in a list format.
•	Delete tasks.
•	Simple and clean UI.
•	Responsive design for mobile and desktop.

4. Usage
•	Add Task: Enter a task in the input field and click the "Add Task" button.
•	Delete Task: Click the "Delete" button next to a task to remove it.

5. Future Improvements
•	Edit tasks functionality.
•	Add user authentication.


6. Project Structure

Here's an overview of the directory structure for this project:

to-do-app/
│
├── todo-backend/                        # Backend (Node.js + Express)
│   │
│   ├── models/                          # Mongoose Models
│   │   └── Task.js                      # Task Schema (MongoDB model)
│   │
│   ├── routes/                          # API Routes
│   │   └── taskRoutes.js                # Routes for Task CRUD operations
│   │
│   ├── .env                             # Environment variables (DB_URI, PORT)
│   ├── server.js                        # Main entry point for the backend
│   ├── package.json                     # Backend dependencies and scripts
│   ├── package-lock.json                # Lock file for consistent installs
│   └── node_modules/                    # Backend dependencies (auto-generated)
│
├── todo-frontend/                       # Frontend (React + Vite)
│   │
│   ├── public/                          # Public assets (index.html, etc.)
│   │   └── index.html                   # Root HTML file for React
│   │
│   ├── src/                             # React application source code
│   │   │
│   │   ├── assets/                      # Images and static assets
│   │   │
│   │   ├── components/                  # Reusable React components
│   │   │   ├── AddTask.jsx              # Component for adding tasks
│   │   │   └── TaskList.jsx             # Component for displaying tasks
│   │   │
│   │   ├── pages/                       # React pages
│   │   │   ├── Home.jsx                 # Home page component
│   │   │   └── TasksPage.jsx            # Tasks management page
│   │   │
│   │   ├── api.js                       # Axios setup for API calls
│   │   ├── App.jsx                      # Main React App component
│   │   ├── App.css                      # Global CSS for App styling
│   │   ├── main.jsx                     # React app entry point (Vite)
│   │   ├── index.css                    # Global styles
│   │   ├── .env                         # Frontend environment variables
│   │   └── vite.config.js               # Vite configuration file
│   │
│   ├── package.json                     # Frontend dependencies and scripts
│   ├── package-lock.json                # Lock file for consistent installs
│   ├── .gitignore                       # Files and folders to ignore in Git
│   ├── README.md                        # Frontend project documentation
│   └── node_modules/                    # Frontend dependencies (auto-generated)
│
├── .gitignore                           # Global Git ignore file
└── README.md                            # Main project documentation
 
7. API Endpoints

Method	        Endpoint	        Description
GET	        /api/tasks	        Fetch all tasks
POST	    /api/tasks	        Add a new task
DELETE	    /api/tasks/:id	    Delete a task by ID

