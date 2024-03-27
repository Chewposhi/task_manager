// Function to update the values of objects based on date comparison
function UpdateTasks(todos) {
    // Get the current date
    const currentDate = new Date();
    let unchanged = [];
    let changed = [];
    // Iterate over each object in the array
    todos.forEach(todo => {
      // Parse the date value from the object (assuming 'date' is the property name)
      const todoDue = new Date(todo.dueDate);
  
      // Compare the object's date with the current date
      if(todo.status === 'upcoming'){
        if (todoDue <= currentDate) {
            // Update the object's value (assuming 'value' is the property name)
            todo.status = 'over due';
            changed.push(todo);
          }else{
            unchanged.push(todo);
          }
      }else{
        unchanged.push(todo);
      }

      // You can add more conditions as needed based on your requirements
    });
    // Update local storage with the updated tasks
    localStorage.setItem('tasks', JSON.stringify(unchanged.concat(changed)));
    // Return the updated array of objects
    return unchanged.concat(changed);
}
  
  // Export the function to be used in other files
export default UpdateTasks;
  