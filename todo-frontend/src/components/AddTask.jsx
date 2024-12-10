import React, { useState } from 'react';
import { addTask } from '../api';

const AddTask = ({ onAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title: taskTitle };
    const addedTask = await addTask(newTask);
    onAdd(addedTask);
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
