import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import TaskCard from './TaskCard';
import 'reactjs-popup/dist/index.css';

const TaskList = ({ todos, setTodos, selected }) => {
  // const [todos, setTodos] = useState([]);
  const status = ['Upcoming', 'Overdue', 'Completed'];

  // Filter todos by priority
  const filterTodosByStatus = (status) => {
    const filtered = todos.filter(todo => todo.status === status);
    return filtered;
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
              (selected.length==0 || selected.includes(todo.priority)) && <TaskCard todo={todo} />
            ))}

          </div>
        </div>
      ))}
    </div>

  );
};

export default TaskList;
