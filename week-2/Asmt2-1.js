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


ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"


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
    2. map() to add: netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"



ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"


ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//console.log(cart)

//Use filter() to get only inStock products
let instock = cart.filter((ele) => ele.inStock == true)

console.log(instock);

//Use map() to create a new array with:  { name, totalPrice }
let newArr = cart.map((ele) => ({
    names : ele.name,
    totalprice : ele.price*ele.quantity
}));
console.log(newArr)

// Use reduce() to calculate grand total cart value
let total = cart.reduce((acc,ele)=>acc+ele.price*ele.quantity,0)
console.log(total)

//Use find() to get details of "Mouse"
let found = cart.find(ele=>ele.name=="Mouse")
console.log(found)

// Use findIndex() to find the position of "Keyboard"
let foundI = cart.findIndex(ele=>ele.name=="Keyboard")
console.log(foundI)

console.log()
console.log("Task-2")


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 2.1)filter() students who passed (marks ≥ 40)
let pass = students.filter((ele) => ele.marks >= 40)
console.log(pass)

//2.2)map() to add a grade field ≥90 → A ≥75 → B ≥60 → C else → D
let grade=students.map(function(ele){
  if (ele.marks>=90){
    return "A";
  }
  else if(ele.marks>=75 ){
    return "B";
  }
   else if(ele.marks>=60){
    return "C";
  }
  else{
    return "D";
  }
});
console.log(grade)

//2.3)reduce() to calculate average marks
let avg = students.reduce((acc,ele) => acc+ele.marks,0) / students.length
console.log("average marks",avg)

//2.4)find() the student who scored 92
let fond = students.find((ele) => ele.marks== 92)
console.log(fond)

//2.5) findIndex() of student "Kiran"
let findIdx = students.findIndex((acc,ele)=>ele.name=="kiran")
console.log(findIdx)


console.log()
console.log("task-3")
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//3.1) filter() employees from IT department
let ITdept = employees.filter((emp)=>emp.department=="IT")
console.log(ITdept)

//3.2) map() to add: netSalary = salary + 10% bonus
let add = employees.map(function(emp){
  return {
    id:emp.id,
    names:emp.name,
    department:emp.department,
    salary:emp.salary,
    netSalary :emp.salary + (emp.salary*0.10)
  };
});
console.log(add)

//3.3)reduce() to calculate total salary payout

let totaal = employees.reduce((acc,emp) => acc+emp.salary,0);
console.log(totaal)


// const total = employees.reduce(function(acc,emp){
//   return total + emp.salary
// },0);


//3.4)find() employee with salary 30000
let found3 = employees.find((emp)=>emp.salary == 30000)
console.log(found3)

//3.5)findIndex() of employee "Neha"
let foundI4 = employees.findIndex((emp)=>emp.name=="Neha")
console.log(foundI4)


console.log("task-4")



const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// 1️) filter() only "Sci-Fi" movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);


// 2️)map() to return: "Inception (8.8)"
const formattedMovies = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log("Formatted Movies:", formattedMovies);


// 3️) reduce() to find average movie rating
const averageRating = movies.reduce(
  (total, movie) => total + movie.rating, 0
) / movies.length;

console.log("Average Rating:", averageRating);


// 4️) find() movie "Joker"
const jokerMovie = movies.find(
  movie => movie.title === "Joker"
);
console.log("Joker Movie:", jokerMovie);


// 5️) findIndex() of "Avengers"
const avengersIndex = movies.findIndex(
  movie => movie.title === "Avengers"
);
console.log("Avengers Index:", avengersIndex);


console.log("task-5")
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// filter all credit transactions
const creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// map to extract only amounts
const amounts = transactions.map(txn => txn.amount);
console.log("Transaction Amounts:", amounts);

// reduce to calculate final balance
const finalBalance = transactions.reduce((acc, txn) => {
  if (txn.type === "credit") {
    return acc + txn.amount;
  } else {
    return acc - txn.amount;
  }
}, 0);

console.log("Final Balance:", finalBalance);

// find first debit transaction
const firstDebit = transactions.find(txn => txn.type === "debit");
console.log("First Debit Transaction:", firstDebit);

// findIndex of transaction with amount 10000
const indexAmount10000 = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of Amount 10000:", indexAmount10000);