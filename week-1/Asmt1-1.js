// 1. Find the big number in two numbers

let a = 10;
let b = 20;

if (a > b) {
    console.log("1. Big number (two numbers):", a);
} else {
    console.log("1. Big number (two numbers):", b);
}


// 2. Find the big number in three numbers

let x = 15;
let y = 40;
let z = 25;

if (x > y && x > z) {
    console.log("2. Big number (three numbers):", x);
} 
else if (y > x && y > z) {
    console.log("2. Big number (three numbers):", y);
} 
else {
    console.log("2. Big number (three numbers):", z);
}


// 3. Find the sum of marks in [90,78,65,98]

let marks = [90, 78, 65, 98];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];  // add each element
}

console.log("3. Total marks:", sum);


// 4. Find the smallest element in marks array

let smallest = marks[0];  // assume first element is smallest

for (let i = 1; i < marks.length; i++) {
    if (marks[i] < smallest) {
        smallest = marks[i];
    }
}

console.log("4. Smallest mark:", smallest);


// 5. Function that receives 3 numbers and returns biggest

function findBig(a, b, c) {
    if (a > b && a > c) {
        return a;
    } 
    else if (b > a && b > c) {
        return b;
    } 
    else {
        return c;
    }
}

console.log("5. Biggest using function:", findBig(10, 25, 18));


// 6. Function that receives array and returns sum

function findSum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    return total;
}

console.log("6. Sum using function:", findSum([90, 78, 65, 98]));


// 7. Function that searches element and returns index

function searchElement(arr, searchValue) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
            return i;  // return index if found
        }
    }

    return "not found";  // if not found
}

console.log("7. Search result:", searchElement([10, 20, 30, 40], 30));
console.log("7. Search result:", searchElement([10, 20, 30, 40], 50));