// Function to update the values of objects based on date comparison
function UpdateTasks(todos) {
    // Get the current date
    const currentDate = new Date();

    // Iterate over each object in the array
    todos.forEach(todo => {
      // Parse the date value from the object (assuming 'date' is the property name)
      const todoDue = new Date(todo.dueDate);
      todoDue.setHours(23); // Set hours to 23 (11 PM)
      todoDue.setMinutes(59);
        if(todo.status === 'Upcoming' && todoDue < currentDate){
                // Update the object's value (assuming 'value' is the property name)
                console.log('current date: '+currentDate+ " due date: "+ todoDue);
                todo.status = 'Overdue';
        }
      // You can add more conditions as needed based on your requirements
    });
    // Update local storage with the updated tasks
    localStorage.setItem('tasks', JSON.stringify(todos));
    // Return the updated array of objects
    return todos;
}
  
  // Export the function to be used in other files
export default UpdateTasks;
  