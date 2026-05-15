//Assignment 3: Find the sum of marks in [90,78,65,98]

let marks=[90,78,65,98]//Data

let sum=0//Inititalizing sum as 0

for(let i=0;i<marks.length;i++){//Iterating through the array
    sum+=marks[i]//Calculates the sum of the entire array 'marks'
}

console.log("Sum of marks = ",sum)//Displays the sum of the array marks
