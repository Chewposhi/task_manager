// Function to update the values of objects based on date comparison
function EditTasks(newTodo) {
    console.log(newTodo);

    const formDataString = localStorage.getItem('tasks');

    if (formDataString) {
        // Parse the JSON string to convert it into an object
        const storedTodos = JSON.parse(formDataString);
        const updatedTodosTodos = storedTodos.map(todo => {
            if (todo.id === newTodo.id) {
              // Return a new object with the completed property updated
              return  newTodo ;
            }
            // For non-matching IDs, return the original object
            return todo;
          });
        localStorage.setItem('tasks', JSON.stringify(updatedTodosTodos));
        window.location.reload();
      } else {
        console.log('No form data found in local storage');
      }
}
  
  // Export the function to be used in other files
export default EditTasks;