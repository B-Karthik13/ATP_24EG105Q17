//write a function that receives an array as arg and return their sum 
let func=function(marks)
{
 let sum=0
 for(i=0;i<marks.length;i++)
    sum=sum+marks[i]
 return sum
}
a=[10,20,30,40,50]
let result=func(a)
console.log("Array elements:",a)
console.log("Sum of the elements in the array=",result)