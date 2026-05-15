//Test Data

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

//Insert new Employee at 2nd position
employees.splice(1,0,{eno:106,name:"ABC",marks:[97,98,99]})
console.log("Employee list after insertion at 2nd position:", employees)//Displays the array after insertion of new employee

//Remove an employee with name "Kiran"
employees.splice(4,1)
console.log("List after removing Kiran:", employees)//Displays array after removing employee "Kiran"

//Change the last mark 95 to 75 of emp  "Sneha"
employees.splice(3,1,{eno:employees[3].eno,name:employees[3].name,marks:[88,92,75]})
console.log("Sneha's marks changed to: 75. ", employees[3])//Displays the modified details of "Sneha"

//Final list after all changes
console.log("Final list: ", employees)//Array after all changes
