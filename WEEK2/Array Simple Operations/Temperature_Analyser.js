/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

//Daily Temperature Analyzer
const temperatures= [32, 35, 28, 40, 38, 30, 42];
//1.filter() temperatures above 35
let r1=temperatures.filter(element=>element>35)
console.log("Elements above 35:",r1)
//2.map() to convert all temperatures from Celsius → Fahrenheit
let r2=temperatures.map(element=>(element*1.8)+32)
console.log("Temperatures in Fahrenheit:",r2)
//3.reduce() to calculate average temperature
let r3=temperatures.reduce((acc,ele)=>acc+ele)
console.log("Average temperature:",r3/temperatures.length)
//4.find() first temperature above 40
let search=temperatures.find(ele=>ele>40)
console.log(">40:",search)
//5.findIndex() of temperature 28
search=temperatures.findIndex(ele => ele==28)
console.log("Index of 28=",search)
