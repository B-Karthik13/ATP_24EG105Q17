/*
Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.
*/

//Create a new array moreFruits
let fruits = ["apple", "banana"];
//Copy all fruits from fruits and adding orange
let moreFruits= [...fruits,"orange"]
//printig bothh arrays
console.log(fruits)
console.log(moreFruits)