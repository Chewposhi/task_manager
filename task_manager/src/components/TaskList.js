import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import TaskCard from './TaskCard';

const TaskList = ({ todos, setTodos }) => {
  // const [todos, setTodos] = useState([]);
  const status = ['Upcoming', 'Overdue', 'Completed'];

  // useEffect(() => {
  //   // Read data from local storage
  //   const formDataString = localStorage.getItem('tasks');
  //   if (formDataString) {
  //     // Parse the JSON string to convert it into an object
  //     const storedTodos = JSON.parse(formDataString);
  //     setTodos(storedTodos);
  //     // console.log('Form data from local storage:', storedTodos);
  //     // Handle the form data as needed (e.g., display it in the UI)
  //   } else {
  //     console.log('No form data found in local storage');
  //   }
  // }, []); // Run this effect only once on component mount

  console.log(todos);

  // Filter todos by priority
  const filterTodosByStatus = (status) => {
    return todos.filter(todo => todo.status === status);
  };

  return (
    <div className="flex justify-evenly flex-wrap gap-10 w-full sm:w-auto mt-10">
      {status.map((status) => (
        <div className={`w-[700px] max-h-[2000px] overflow-auto`}>
          <p className={styles.sectionSubText}>
            {status}
          </p>
          <div className='flex flex-col gap-2'>
            {filterTodosByStatus(status).map((todo) => (
              <TaskCard todo={todo} />
            ))}

          </div>
        </div>
      ))}
    </div>

  );
};

export default TaskList;
