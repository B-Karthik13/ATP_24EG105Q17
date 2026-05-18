// Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
console.log("IT Employees:",employees.filter(ele=>ele.department=="IT"))

//2.add netSalary
console.log("Employee Data:",employees.map(ele => {
    ele.netSalary=ele.salary+ele.salary/10
    return ele
}))

//3.reduce() to calculate total salary payout
console.log("Total Salary=",employees.reduce((acc,ele)=> acc+ele.salary,0))

//4. find() employee with salary 30000
console.log("Employee with Salary 30,000:",employees.find(ele=>ele.salary==30000).name)

//5. findIndex() of employee "Neha"
console.log("Index of Neha:",employees.findIndex(ele=>ele.name=="Neha"))