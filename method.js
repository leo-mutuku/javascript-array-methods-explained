// Javascript array methods
// concat() - joins two arrays (concatinate) - does not change the format.
const mutukus = ['Leo','Alex', 'Mutua'];
const Leos =['Lawrence','Hanni'];
const children = Leos.concat(mutukus);
console.log(children)
// result = [ 'Lawrence', 'Hanni', 'Leo', 'Alex', 'Mutua'





// copyWithin() - Copies array values to onther position in the same array. Does not add items to in the array - It overwrites the exiting array. syntax array.copyWith(taget, start, end)

const  Fruits = ['Bananas', 'Oranges', 'Kiwi', 'Melon', 'Papaya','Lichi']
console.log(Fruits.copyWithin(2, 0, 2))
//result = [ 'Bananas', 'Oranges', 'Bananas', 'Oranges', 'Papaya', 'Lichi' ]


//entries() - returns an iteration of array with keys - are the index and values - are the items.
// consider the Fruits array
const FruitsEntries = Fruits.entries()
// an array object iterator  - Object [Array Iterator] {}
console.log(FruitsEntries)
// use next() to iterate over the values
for(let i=0;i<Fruits.length; i++){
    console.log(FruitsEntries.next().value)
//Results
    /*
    [ 0, 'Bananas' ]
    [ 1, 'Oranges' ]
    [ 2, 'Bananas' ]
    [ 3, 'Oranges' ]
    [ 4, 'Papaya' ]
    [ 5, 'Lichi' ]
    */
}


// Constructor property on objects.

console.log( Fruits.constructor)
//Return [Function: Array] - the array constructor function
const Fruits2 = new Fruits.constructor
Fruits2.push('Kewis')
console.log(Fruits2)

//every() - returns true for true for elements in an array if the function pass the test.If does not excute an element for empty array
const age = [29,19,18,34,40]
let valueToCheck = 17;
function checkAge(age){
    return age > valueToCheck
}
console.log(age.every(checkAge))

//fill() - Fill the value of a specified array. If not specified. Fill overwrites the original array.
console.log(Fruits.fill('kiwi'))
//return = [ 'kiwi', 'kiwi', 'kiwi', 'kiwi', 'kiwi', 'kiwi' ]
console.log(Fruits.fill('kiwi',3,4))
//return [ 'Bananas', 'Oranges', 'Bananas', 'kiwi', 'Papaya', 'Lichi' ]

//filter() -
function checkAdult(age){
    let adultAge = 18
    return age >= adultAge
}
console.log(age.filter(checkAdult))
//return = [ 29, 19, 18, 34, 40 ]

ratings.forEach(async function(rating) {
    sum = await sumFunction(sum, rating)
})

console.log(sum)
// expected 14
// returned 0

let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
    console.log(word)
    if (word === 'two') {
        words.shift() //'one' will delete from array
    }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']

