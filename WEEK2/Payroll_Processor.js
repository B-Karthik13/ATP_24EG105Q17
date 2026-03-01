/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1.IT employees
console.log("IT Employees:",employees.filter(ele=>ele.department=="IT"))

//2.add netSalary
console.log("Employee Data:",employees.map(ele => {
    ele.netSalary=ele.salary+ele.salary/10
    return ele
}))

//3.total salary
console.log("Total Salary=",employees.reduce((acc,ele)=> acc+ele.salary,0))

//find emp with 30,000 salary
console.log("Employee with Salary 30,000:",employees.find(ele=>ele.salary==30000).name)

//5.index of Neha
console.log("Index of Neha:",employees.findIndex(ele=>ele.name=="Neha"))