//Question One


// Mutating methods are methods that modify the array on which they are called. 
// Non-mutating methods, on the other hand,
//  return a new array with the specified changes, leaving the original array unchanged.

//Mutating methods:

// push(): adds one or more elements to the end of the array.
// pop(): removes the last element from the array.
// splice(): adds or removes elements from an array.
// sort(): sorts the elements in the array in place.
// reverse(): reverses the order of the elements in the array.

//Non-mutating methods:

// concat(): returns a new array that combines the elements of two or more arrays.
// slice(): returns a new array that contains a portion of an existing array.
// filter(): returns a new array containing only the elements that satisfy the specified condition.
// map(): returns a new array with the specified transformation applied to each element.
// reduce(): applies a function to each element of the array and returns a single value.

//Question  Two

let myArray = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
myArray.push('Kotlin')
let rubyIndex = myArray.indexOf('Ruby');
myArray.splice(rubyIndex +1, 0, 'Java')
myArray.shift();
myArray.unshift('Scala', 'Swift')
let phpIndex = myArray.indexOf('PHP');
myArray.splice(phpIndex, 1, 'Go', 'RUST')


//Question  Three

['apple', 'mango', 'orange']

//Question Four

function findMaxValue(arr){
return Math.max(...arr)
}

//Question Five

function valTimesIndex(arr){
    return arr.map((value, index) => value * index)
}

