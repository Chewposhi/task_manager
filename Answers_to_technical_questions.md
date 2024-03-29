## Q1. How long did you spend on the coding test?
### A1. 2.5 days
## Q2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
### A2. The new JavaScript Object method: `Object.groupBy()`. I was able to use this to group the task objects with the same status with just one line instead of using a function that filters the array of objects by status for each status. However, this method is not yet supported by safari, therefore, I have decided to temporary disable this function and use an alternative.
#### Code snippet:
````
counts = Object.groupBy(todos, todo => todo.status)
...
return(
...
  <div> {counts[status].map((todo) => (
                (selected.length===0 || selected.includes(todo.priority)) && <TaskCard todo={todo} />}
  </div>
...
)
````
## Q3. How would you track down a performance issue in production? Have you ever had to do this?
### A3. I would track the performance by observing the time taken for each operation. I did something similar for a search engine project in which I had to track the time taken for each search
## Q4. If you had more time, what additional features or improvements would you consider adding to the task management application?
### A4. I would modify the application logic so the page does not need to reload every time a task is created or modified. I would also improve the styling with better theme and colour 
