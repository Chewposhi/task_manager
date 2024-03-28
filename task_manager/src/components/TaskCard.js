import React, { useState } from 'react';
// import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TiTickOutline } from "react-icons/ti";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { styles } from '../styles';

import DeleteTasks from '../util/DeleteTask';
import CompleteTasks from '../util/CompleteTask';

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // delete task
  const onDeleteTask = id =>{
    DeleteTasks(id);
  }

  // complete task
  const onCompleteTask = id =>{
    CompleteTasks(id);
  }

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
      <div className="flex flex-col gap-2 sm:flex-row justify-between items-center mx-auto my-2 text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg p-4 w-11/12 sm:w-full" key={todo.id}>
        <div className="mb-2 sm:mb-0 w-[300px]">
          <Popup trigger={
            <p className="overflow-auto text-center custom-scrollbar hover:cursor-pointer">
              {todo.title}
            </p>
          } modal>
            <p className={styles.modalText}>{todo.description}</p>
          </Popup>
        </div>
        <div className="flex-1 mb-2 sm:mb-0">
          {todo.dueDate}
        </div>
        <div className="flex-1 mb-2 sm:mb-0">
          {todo.priority}
        </div>
        <div className="flex items-center gap-1 text-2xl">
          {todo.status != 'Completed' && <TiTickOutline className='cursor-pointer'
            onClick={() => onCompleteTask(todo.id)}
          />}
          <RiCloseCircleLine
            onClick={() => onDeleteTask(todo.id)}
            className='cursor-pointer'
          />
          <TiEdit
            // onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='cursor-pointer'
          />
        </div>
      </div>
  );
};

export default Todo;