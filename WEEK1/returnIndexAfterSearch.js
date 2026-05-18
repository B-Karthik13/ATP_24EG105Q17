// write a function that receives an array & search element as args and returns the index of that search element in the array. It should return not found when search element not found.
let func=function(a,key)
{
    for(i=0;i<a.length;i++)
    {
     if(a[i]==key)
        return i
    }
    return "not found"
}
let a=[10,20,30,40]
let result=func(a,45)
console.log("Index:",result)