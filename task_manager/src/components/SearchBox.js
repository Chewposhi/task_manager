import React, { useState,useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddTask from './AddTask';

const SearchBox = ({ todos, setTodos }) => {
  const [searchString, setSearchString] = useState("");
  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    const latestTodos = JSON.parse(localStorage.getItem('tasks'));
    if(searchString.length == 0){
      setTodos(latestTodos);
      return;
    }
    // Filter the array and keep only the objects with status included in the selected array
    const filteredTodos = latestTodos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()));

    setTodos(filteredTodos);
  }, [searchString]);

  return (
    <div className='flex flex-col gap-10 my-10 items-center mx-auto max-w-sm'>
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
              <AddTask todo={null} isEdit={false}/>
          </Popup>
        </div>
      {/* search box */}
      <div className='w-full relative'>
        <input 
          value={searchString} 
          onChange={handleInputChange} 
          type='search' 
          placeholder='Search for a task' 
          className='w-full p-4 rounded-full bg-slate-800' 
        />
      </div>
    </div>


  )
}

// export default SectionWrapper(SearchBox)
export default SearchBox;
