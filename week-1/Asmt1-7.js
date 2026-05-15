/*7. Write a function that receives an array and search element as args and returns the index of that search element in the array. 
 It should return "not found" when search not found.*/

function search(arr,search_element){//Function which receives an array and search element as arguments
    let index=-1
    for(let i=0;i<arr.length;i++){//Loop for iterating through the array
        if(arr[i]===search_element){//Checks for the search element in the entire array by comparing
            index=i//If found, the index is stored
            break//Skips all remaining iterations if the element is found
        }
    }

    return index===-1?"not found":index//Returns index if element is found, otherwise returns 'not found'
}

console.log("Index of search element is: ",search([10,20,30,40,50],30))//Displays the index, otherwise displays 'not found'
