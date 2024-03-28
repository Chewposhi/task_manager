import React, { useState,useEffect } from 'react';
import { styles } from '../styles';
import TaskList from './TaskList';

const Piority= ({ todos, setTodos }) => {
  const [selected, setSelected] = useState([]);

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
    <div className='flex flex-col items-center gap-20'>
      <p className={styles.sectionSubText}>
        Filter by Priority
      </p>
      {/* filter */}
      <div className="flex">
        <div className="flex items-center me-4">
          <input checked = {selected.includes("High")} onChange={() => handleCheckboxClick("High")} id="inline-checkbox" type="checkbox" value="high" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-checkbox" className="ms-2 text-lg font-medium text-red-900 dark:text-red-300">High</label>
        </div>
        <div className="flex items-center me-4">
          <input checked = {selected.includes("Medium")} onChange={() => handleCheckboxClick("Medium")} id="inline-2-checkbox" type="checkbox" value="medium" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-2-checkbox" className="ms-2 text-lg font-medium text-yellow-900 dark:text-yellow-300">Medium</label>
        </div>
        <div className="flex items-center me-4">
          <input checked = {selected.includes("Low")} onChange={() => handleCheckboxClick("Low")} id="inline-3-checkbox" type="checkbox" value="low" name="inline-checkbox-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-3-checkbox" className="ms-2 text-lg font-medium text-blue-900 dark:text-blue-300">Low</label>
        </div>
      </div>
      {/* tasks list */}
      <TaskList todos={todos} setTodos={setTodos} selected={selected}/>
    </div>
    
  )
}

// export default SectionWrapper(Piority);
export default Piority;
