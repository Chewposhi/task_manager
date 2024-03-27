import React, { useState } from 'react';
// import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // const submitUpdate = value => {
  //   updateTodo(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };

  // if (edit.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  // }

  return (
    <div className="flex flex-col gap-2 sm:flex-row justify-between items-center mx-auto my-4 text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg p-4 w-11/12 sm:w-full" key={todo.id}>
      <div className="mb-2 sm:mb-0 w-[300px]">
        <p className="overflow-auto text-center custom-scrollbar">
          {todo.title}
        </p>
      </div>
      <div className="flex-1 mb-2 sm:mb-0">
        {todo.dueDate}
      </div>
      <div className="flex-1 mb-2 sm:mb-0">
        {todo.priority}
      </div>
      <div className="flex items-center text-2xl cursor-pointer">
        <RiCloseCircleLine
          // onClick={() => removeTodo(todo.id)}
          className="mr-1"
        />
        <TiEdit
          // onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className=""
        />
      </div>
    </div>



  );
};

export default Todo;