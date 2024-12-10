import React, { useEffect, useState } from "react";
import axios from "axios";


const TasksPage = () => {
  const [taskName, setTaskName] = useState(""); // new task input
  const [tasks, setTasks] = useState([]); // storing fetched tasks

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = { taskName };

    try {
      const response = await axios.post("http://localhost:5000/api/tasks", newTask);
      setTasks([...tasks, response.data]);
      setTaskName("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      {/* Add Task Form */}
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-input"
          placeholder="Enter a new task"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>

      {/* Task List */}
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              <span className="task-name">{task.taskName}</span>
              <button onClick={() => handleDeleteTask(task._id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks">No tasks available. Add a new task above.</p>
      )}
    </div>
  );
};

export default TasksPage;
