/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

//1.names with length greater than 5
let names=courses.filter(elements => elements.length>5)
console.log("Names with length >5 are:",names)

//2.change to uppercase
let upper=courses.map(elements=>elements.toUpperCase())
console.log("Courses:",upper)

//3. Replace | with ,
let Courses=upper.reduce((acc, curr,index) => {
  return index === 0 ? curr : `${acc} | ${curr}`;
})
console.log("Courses:",Courses)

//4.find react
let search=courses.find(element=>element=="react")
console.log("Search found:",search)

//5.findIndex of node
search=courses.findIndex(element=>element=="node")
console.log("node is at index:",search)