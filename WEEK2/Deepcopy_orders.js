/*
Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

const order = {
  orderId: "ORD1001",
   customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
       { product: "Laptop", price: 70000 }
      ]
};

//deepcopy object creation for order class
let ordercopy=structuredClone(order)
//modification of city
ordercopy.customer.address.city="Chennai"
//modification of price
ordercopy.items[0].price=5000
//printing both objects
console.log(order)
console.log(ordercopy)