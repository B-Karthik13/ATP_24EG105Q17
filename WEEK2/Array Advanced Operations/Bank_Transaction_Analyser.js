//Bank Transaction Analayser
import { trace } from "node:console";
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1.filter() all credit transactions
console.log("Credit Transcations:",transactions.filter(transaction => transaction.type==="credit"))

// 2.map() to extract only transaction amounts
console.log("Transaction Amount:",transactions.map(transaction =>transaction.amount))

// 3.reduce() to calculate final account balance
let balance=transactions.reduce((acc,transaction)=>{
    if(transaction.type==="credit")
        return acc+transaction.amount
    else
        return acc-transaction.amount
},0)
console.log("Account Balance=",balance)

// 4.find() the first debit transaction
console.log("First Debit Transcation:",transactions.find(transaction=>transaction.type==="debit"))

// 5.findIndex() of transaction with amount 10000
console.log("Index of Transaction of 10,000=",transactions.findIndex(transaction => transaction.amount===10000))