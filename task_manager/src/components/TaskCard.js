import React from 'react';
import { SectionWrapper } from '../hoc';

const TaskCard = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex'>
        <p>
          name
        </p>
        <p>
          due date
        </p>
        <p>
          Priority
        </p>
        <div></div>
      </div>
      <div>
        <p>description</p>
      </div>
    </div>
  )
}

export default SectionWrapper(TaskCard);