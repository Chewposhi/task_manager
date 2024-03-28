import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import TaskCard from './TaskCard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TaskList = ({ todos, setTodos }) => {
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
              <TaskCard todo={todo} />
            ))}

          </div>
        </div>
      ))}
    </div>

  );
};

export default TaskList;
