const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




/*1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"

*/

// 1. Insert new Emp at 2nd position
let newEmp = { eno: 106, name: "ram", marks: [75, 80, 85] };
employees.splice(1, 0, newEmp);
console.log( employees);

// 2. Remove an emp with name "Kiran"
let kiranIndex = employees.findIndex(emp => emp.name === "Kiran");
if (kiranIndex !== -1) {
  employees.splice(kiranIndex, 1);
}
console.log("After removing Kiran:", employees);

// 3. Change the last mark 95 to 75 of emp "Sneha"
let sneha = employees.find(emp => emp.name === "Sneha");
if (sneha && sneha.marks.length > 0) {
  sneha.marks[sneha.marks.length - 1] = 75;
}
console.log("After updating Sneha's mark:", employees);   

