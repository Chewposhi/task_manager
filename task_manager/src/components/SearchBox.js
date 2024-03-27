import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { AiOutlineSearch } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddTask from './AddTask';

const SearchBox = () => {
  const [searchString, setSearchString] = useState("");
  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className='flex flex-col items-center mx-auto max-w-sm'>
      {/* search box */}
      <div className='w-full relative'>
        <input 
          value={searchString} 
          onChange={handleInputChange} 
          type='search' 
          placeholder='Search for a task' 
          className='w-full p-4 rounded-full bg-slate-800' 
        />
        <button 
          className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full'
        >
          <AiOutlineSearch />
        </button>
      </div>
      {/* popup form */}
      <div>
        <Popup trigger=
            {<div className="relative bg-white bg-opacity-90 rounded-xl mt-4 hover:cursor-pointer">
            <img src="./additem.png" alt="Add task" className="w-16 h-16 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100">
              <p className="text-white text-lg text-center">Add task</p>
            </div>
          </div>}
            position="bottom center"
            modal>
            <AddTask />
        </Popup>
      </div>
    </div>


  )
}

// export default SectionWrapper(SearchBox)
export default SearchBox;