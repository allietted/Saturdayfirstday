//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both.

function combineTwoArrays(arrayOne, arrayTwo){
    const array3 = arrayOne.concat(arrayTwo)
    return array3
}


const arrayNumberOne =["tree", "cat", "flower"]
const arrayNumberTwo =["branch", "meow", "leaf"]


console.log(combineTwoArrays(arrayNumberOne, arrayNumberTwo))
