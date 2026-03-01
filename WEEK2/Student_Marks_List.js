/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

//1.marks>=40
console.log("Marks Above and equal to 40:",marks.filter(ele=>ele>=40))

//2.adding 5 marks to each student
console.log("Updated Marksheet:",marks.map(ele=>ele+5))

//3.finding the highest mark
console.log("Highest Mark=",marks.reduce((acc,ele)=>acc>ele?acc:ele))

//4.first below 40
console.log("First Mark <40:",marks.find(ele=>ele<40))

//5.index of 92
console.log("Index of 92=",marks.findIndex(ele=>ele==92))