import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import TaskPanel from "./components/TaskPanel";
import UpdateTasks from "./util/UpdateTasks";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Read data from local storage
    const formDataString = localStorage.getItem('tasks');
    if (formDataString) {
      // Parse the JSON string to convert it into an object
      const storedTodos = JSON.parse(formDataString);
      const updatedTodos = UpdateTasks(storedTodos);
      setTodos(updatedTodos);
    } else {
      console.log('No form data found in local storage');
    }
  }, []); // Run this effect only once on component mount

  return (
    <div className="relative z-0">
      <Hero />
      <SearchBox todos={todos} setTodos={setTodos}/>
      <TaskPanel todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
