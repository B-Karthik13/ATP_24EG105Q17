// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title)
{
 if(title.length>=3)
    return true
 else 
    return false
}                    
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) 
{
 if(priority=='low'||priority=='medium'||priority=='high')
    return true
 else
    return false
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) 
{
 let today=new Date()
 if(date>today)
  return true
}

export {validateTitle,validatePriority,validateDueDate}