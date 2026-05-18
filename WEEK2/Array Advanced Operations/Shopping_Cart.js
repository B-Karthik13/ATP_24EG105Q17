/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. filter() to get only inStock products
let r=cart.filter(cartObj=>cartObj.inStock==true)
console.log(r)

//2. map() to create a new array with:  { name, totalPrice }
r=cart.map(cartObj=>{ return {name:cartObj.name,price:cartObj.price*cartObj.quantity}})
console.log(r)

//3. reduce() to calculate grand total cart value
let Value=cart.reduce((acc,obj)=> acc+(obj.quantity*obj.price),0)
console.log("Total Cart Value=",Value)

//4. find() to get details of "Mouse"
let search=cart.find(cartObj => cartObj.name=="Mouse")
console.log(search)

//5. findIndex() to find the position of "Keyboard"
search=cart.findIndex(cartObj => cartObj.name=="Keyboard")
console.log("Index=",search)
