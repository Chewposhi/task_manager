import React, { useState,useEffect } from 'react';
import { styles } from '../styles';
import TaskList from './TaskList';
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';

const TaskPanel= ({ todos, setTodos }) => {
  const [selected, setSelected] = useState([]);
  const status = ['Upcoming', 'Overdue', 'Completed'];
  const [statusCount, setStatusCount] = useState({
    Upcoming: 0,
    Completed: 0,
    Overdue: 0
  });
  const lineWidth = 60;

  const latestTask = localStorage.getItem('tasks');
  if (latestTask) {
    // Parse the JSON string to convert it into an object
    const storedTodos = JSON.parse(latestTask);
    status.forEach(status => {
      statusCount[status] = storedTodos.filter(todo => todo.status === status).length;
    })
  }else {
    console.log('No form data found in local storage');
  };

  useEffect(() => {
    const newStatusCount = {}; // Create a new object to hold updated counts
  
    // Loop through each status
    if(todos!== null){
        status.forEach(statusItem => {
        // Filter todos based on status and get the count
          const count = todos.filter(todo => todo.status === statusItem).length;
          newStatusCount[statusItem] = count; // Assign the count to the status in the new object
        });
        // Update the state with the new status counts
        setStatusCount(newStatusCount);
    }

  }, [todos]);

  const handleCheckboxClick = (value) => {
    // Check if the value is already in selected
    if (selected.includes(value)) {
      // Remove the value from selected
      const updatedSelected = selected.filter((item) => item !== value);
      setSelected(updatedSelected);
    } else {
      // Add the value to selected
      const updatedSelected = [...selected, value];
      setSelected(updatedSelected);
    }
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      <p className={styles.sectionSubText}>
        Filter by Priority
      </p>
      {/* filter */}
      <div className="flex">
        <div className="flex items-center me-4">
          <input checked = {selected.includes("High")} onChange={() => handleCheckboxClick("High")} id="inline-checkbox" type="checkbox" value="high" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-checkbox" className="ms-2 text-lg font-medium text-red-300 dark:text-red-300">High</label>
        </div>
        <div className="flex items-center me-4">
          <input checked = {selected.includes("Medium")} onChange={() => handleCheckboxClick("Medium")} id="inline-2-checkbox" type="checkbox" value="medium" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-2-checkbox" className="ms-2 text-lg font-medium text-yellow-300 dark:text-yellow-300">Medium</label>
        </div>
        <div className="flex items-center me-4">
          <input checked = {selected.includes("Low")} onChange={() => handleCheckboxClick("Low")} id="inline-3-checkbox" type="checkbox" value="low" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-3-checkbox" className="ms-2 text-lg font-medium text-blue-300 dark:text-blue-300">Low</label>
        </div>
      </div>
      {/* tasks list */}
      <TaskList todos={todos} setTodos={setTodos} selected={selected} statusCount={statusCount} setStatusCount={setStatusCount}/>
      <PieChart
        className='w-[300px] sm:w-[700px]'
        style={{
          fontSize: '5px',
        }}
        radius={pieChartDefaultProps.radius - 6}
        lineWidth={lineWidth}
        label={({ dataEntry }) => statusCount[dataEntry.title] === 0? "" : dataEntry.title + ": " + dataEntry.value }
        labelPosition={lineWidth}
        labelStyle={{
          fill: '#fff',
          pointerEvents: 'none',
        }}
        data={[
          { title: 'Upcoming', value: statusCount['Upcoming'], color: '#063895' },
          { title: 'Completed', value: statusCount['Completed'], color: '#6AB802' },
          { title: 'Overdue', value: statusCount['Overdue'], color: '#952D06' },
        ]}
      />
    </div>
    
  )
}
export default TaskPanel;
