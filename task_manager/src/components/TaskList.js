import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import TaskCard from './TaskCard';
import 'reactjs-popup/dist/index.css';

const TaskList = ({ todos, selected, statusCount }) => {
  const status = ['Upcoming', 'Overdue', 'Completed'];
  // const [counts, setCount] = useState({'Upcoming':[], 'Overdue':[], 'Completed':[]});

  // useEffect(()=>{
  //   console.log(todos);
  //   setCount(Object.groupBy(todos, todo => todo.status));
  //   console.log(counts);
  //   console.log(counts["Upcoming"]);
  // },[todos])

  const counts = Object.groupBy(todos, todo => todo.status)


  // Filter todos by priority
  // const filterTodosByStatus = (status) => {
  //   const filtered = todos.filter(todo => todo.status === status);
  //   return filtered;
  // };

  return (
    <div className="flex justify-evenly flex-wrap gap-10 w-full sm:w-auto mt-10 p-5 bg-black bg-opacity-10 rounded-lg ">
      {status.map((status) => (
        <div className={`w-[700px] max-h-[2000px] overflow-auto`}>
          <p className={styles.sectionSubText}>
            {status +": "+ statusCount[status]}
          </p>
          <div className='flex flex-col gap-2'>
            {/* {filterTodosByStatus(status).map((todo) => (
              (selected.length===0 || selected.includes(todo.priority)) && <TaskCard todo={todo} />
            ))} */}
            {Object.keys(counts).length > 0 && Object.keys(counts).includes(status) && counts[status].map((todo) => (
              (selected.length===0 || selected.includes(todo.priority)) && <TaskCard todo={todo} />
            ))}

          </div>
        </div>
      ))}
    </div>

  );
};

export default TaskList;
