const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//inserting an emp at 2nd position
employees.splice(1,0,{eno: 202,name: "Karthik",marks: [75,80,96]})
console.log(employees)

//remove an emp with name "kiran"
let search=function(a,key){
for(i=0;i<a.length;i++)
{
    if(a[i].name===key)
     return i
}}
let index=search(employees,"Kiran")
employees.splice(index,1)
console.log(employees)

//Change the last mark 95 to 75 of emp "Sneha"
index=search(employees,"Sneha")
employees[i].marks[2]=75
console.log(employees)