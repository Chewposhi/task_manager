// Function to update the values of objects based on date comparison
function DeleteTasks(id) {

    const formDataString = localStorage.getItem('tasks');

    if (formDataString) {
        // Parse the JSON string to convert it into an object
        const storedTodos = JSON.parse(formDataString);
        const filteredTodos = storedTodos.filter(todo => todo.id !== id);
        localStorage.setItem('tasks', JSON.stringify(filteredTodos));
        window.location.reload();
      } else {
        console.log('No form data found in local storage');
      }
}
  
  // Export the function to be used in other files
export default DeleteTasks;
  