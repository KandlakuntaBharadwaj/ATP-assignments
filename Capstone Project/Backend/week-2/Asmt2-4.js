//Assignment on spreadoperators and unpacking

// 💡 Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
//                         You are given:
//                                 let fruits = ["apple", "banana"];
                        
                        
//                         Tasks
//                               -> Create a new array moreFruits
                              
//                               -> Copy all fruits from fruits
                              
//                               -> Add "orange" at the end using spread
                              
//                               -> Print both arrays
                        
                        
//                         ✅ Expected Output
//                               ["apple", "banana"]
//                               ["apple", "banana", "orange"]
                        
//                         👉 Original array should NOT change.








// 💡 Exercise 2: Update User Object
                        
//                         Goal: Learn object cloning & adding new property
                        
//                         You are given:
                                
//                                 let user = {
//                                   name: "Ravi",
//                                   city: "Hyderabad"
//                                 };
                        
                        
                        
//                         Tasks
                        
//                               -> Create a new object updatedUser
                              
//                               -> Copy all properties from user
                              
//                               -> Add a new property age: 25
                              
//                               -> Print both objects
                        
                        
                        
//                         ✅ Expected Output
//                               { name: "Ravi", city: "Hyderabad" }
//                               { name: "Ravi", city: "Hyderabad", age: 25 }
                        
//                         👉 Original object should remain unchanged.


// Exercise 1: Copy & Extend an Array

let fruits = ["apple", "banana"];

// create new array and add orange
let moreFruits = [...fruits, "orange"];

// print both arrays
console.log(fruits);
console.log(moreFruits);



// Exercise 2: Update User Object

let user = {
  name: "Ravi",
  city: "Hyderabad"
};

// create new object and add age
let updatedUser = { ...user, age: 25 };

// print both objects
console.log(user);
console.log(updatedUser);






// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t





const user2 = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};
//console.log("Original User:", user);

// Shallow copy
const copiedUser = { ...user2 };

// Modify copied object
copiedUser.name = "Amit";
copiedUser.preferences.theme = "light";

// Log both
console.log("Original User:", user2);
console.log("Copied User:", copiedUser);





// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

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

// Deep copy
const copiedOrder = structuredClone(order);

// Modify copied object
copiedOrder.customer.address.city = "Chennai";
copiedOrder.items[0].price = 65000;

// Check both objects
console.log("Original Order:", order);
console.log("Copied Order:", copiedOrder);
