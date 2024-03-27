import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Piority= () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <p className={styles.sectionSubText}>
        Filter by Piority
      </p>
      <div className="flex">
        <div className="flex items-center me-4">
          <input checked id="inline-radio" type="radio" value="high" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-radio" className="ms-2 text-lg font-medium text-red-900 dark:text-red-300">High</label>
        </div>
        <div className="flex items-center me-4">
          <input id="inline-2-radio" type="radio" value="medium" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-2-radio" className="ms-2 text-lg font-medium text-yellow-900 dark:text-yellow-300">Medium</label>
        </div>
        <div className="flex items-center me-4">
          <input id="inline-checked-radio" type="radio" value="low" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="inline-checked-radio" className="ms-2 text-lg font-medium text-blue-900 dark:text-blue-300">Low</label>
        </div>
      </div>

    </div>
    
  )
}

export default SectionWrapper(Piority);
