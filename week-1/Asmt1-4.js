//Assignment 4: Find the smallest element in marks array

//If not, min

let marks=[90,78,65,98]//Data

let min=marks[0]//Taking first element of the array as minimum initially

for(let i=1;i<marks.length;i++){// Iterating through the array

if(marks[i]<min){//Checks with each element of the array 'marks' index wise

min=marks[i]//Keeps on replacing the current element with a smaller element till the smallest element is found.

}

remains as the smallest element }

console.log("Smallest element in marks array = ",min)//Displays the smallest element of the array
