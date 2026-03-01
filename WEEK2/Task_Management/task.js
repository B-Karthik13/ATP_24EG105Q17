import { validateTitle,validatePriority,validateDueDate } from "./validator.js";
const tasks=[]
function addTask(title,priority,dueDate)
{
 if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(dueDate))
 {
    tasks.push({"Title":title,"Priority":priority,"DueDate":dueDate})
    return console.log("Success,Task Added")
 }
 return console.log("Task is invalid")
}
function getAllTasks()
{
 if(tasks.length!=0)
 {for(let task of tasks)
   console.log(task)}
   else{console.log("There are no tasks added")}
}

function completeTask(taskId) 
{
 for(let task of tasks)
 {
   if(task.Title==taskId)
      return console.log("Task Found: ",task)
 }
 return console.log("Task not found")
}

export {addTask,getAllTasks,completeTask}