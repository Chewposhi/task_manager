import React, { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';

const AddTask = () => {
  // State variables to store form input values
  const [idCounter, setIdCounter] = useState(1);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);;

  const currentDate = new Date().toISOString().split('T')[0];

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    
    // Determine the highest existing ID in stored tasks
    const maxId = storedTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0);
    
    // Set the ID counter to one greater than the highest existing ID
    setIdCounter(maxId + 1);
  }, []);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: idCounter,
      title,
      dueDate,
      priority,
      description,
      status: 'upcoming'
    };

    // Update tasks state with the new task
    setTasks([...tasks, newTask]);

    // Update local storage with the updated tasks
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

    // Increment the ID counter for the next task
    setIdCounter(idCounter + 1);

    // Clear form fields
    setTitle('');
    setDueDate('');
    setPriority('');
    setDescription('');
    window.location.reload()
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          min={currentDate}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  );
};

export default AddTask;