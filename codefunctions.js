//Create a function that takes an array of numbers and returns a new array with the square of each number.


//use for loop for (i = 0; i < 10; i++)
function doSqu (x) {
  
    let array2 = []
    for (i = 0; i < x.length; i++)
    
    array2.push(x[i]**2)

    return array2

}

const squThis = [8, 10, 14]

console.log (doSqu(squThis))


    













