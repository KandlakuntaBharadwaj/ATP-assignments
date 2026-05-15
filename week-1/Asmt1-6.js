//Assignment 6: Write a function that receives an array as arg and return their sum

function sum(arr1){//Function which receives an array as argument
    let sum=0//Sum initialized as 0
    for(let i=0;i<arr1.length;i++){//Loop to itertate through the array
        sum+=arr1[i]//Adding each element to calculate the sum
    }
    return sum//Returns sum
}

console.log("Sum = ",sum([10,20,30,40,50,60]))//Displays the sum of the array being passed as argument
