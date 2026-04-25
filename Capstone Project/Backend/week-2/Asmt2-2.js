/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    Assignment 1: Daily Temperature Analyzer
----------------------------------------

Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */


console.log("Task-1")
const temperatures = [32,35,28,40,38,30,42];


//1. filter() temperatures above 35
console.log("temperatures",temperatures)
let res=temperatures.filter((element) => element>35);
console.log("temperatures above 35:",res)


//2. map() to convert all temperatures from Celsius → Fahrenheit
let r1=temperatures.map(temp=>temp = (temp * 9/5) + 32)
console.log(" convert all temperatures from Celsius → Fahrenheit",r1)
//3. reduce() to calculate average temperature
const total = temperatures.reduce(function(acc, ele) {
    return acc + ele;
}, 0);
const average = total / temperatures.length;
console.log("Avg of temp",average);


//find() first temperature above 40
const firstAbove40 = temperatures.find(function(temp) {
    return temp > 40;
});

console.log("find() first temperature above 40",firstAbove40);

//5. findIndex() of temperature 28

const indexOf28 = temperatures.findIndex(function(temp) {
    return temp === 28;
});

console.log("findIndex() of temperature 28",indexOf28);


console.log()
console.log("Task-2")
const courses = ["javascript", "react", "node", "mongodb", "express"];
console.log("courses are",courses)

//1)filter() courses with name length > 5