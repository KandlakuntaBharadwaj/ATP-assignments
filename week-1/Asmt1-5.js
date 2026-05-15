//Assignment 5: Write a function that receives 3 number args and returns the big number

function biggestof3(x,y,z){//Function with 3 arguments
    return x>y?(x>z?x:z):(y>z?y:z)//Returns the biggest of the three numbers after comparison
}

console.log("Biggest number among given three numbers is: ",biggestof3(1,2,3))//Displays the biggest of three numbers
                                                                          //passed as arguments to the above function
