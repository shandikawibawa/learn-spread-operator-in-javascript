// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes is an iterable (e.g an array) and expand it into individual elements.
// The spread operator is commonly used to make shallow copies of JS object.
// Using this operator makes the code consise its readability.

function giveMe4(a,b,c,d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

//======================================//

const colors = ["red", "green", "blue", "teal"];

giveMe4(...colors);

//======================================//

const strNums = ['one', 'two', 'three']
const moreStrNums = ['four', 'five', 'six'];
const concat = [...strNums, ...moreStrNums];

console.log(concat);

//======================================//

let peoples = ['shandika', 'diwa', 'steven']
const allPeps = ['mangde', ...peoples, 'wira']

console.log(allPeps, 'panji') 

//======================================//

const obj1 = {x: 1, y: 2};
const obj2 = {z: 3};
const obj3 = {...obj1, ...obj2};
console.log(obj3)

//======================================//

let person = {
    name: 'Shandika',
    age: 18,
    gender: 'male'
}

const clone = {...person, work: "Programmer", location: 'idk'}
console.log(clone)
console.log(person)

//======================================//

let arr = [1, 2, 3];
let arr2 = [4, 5];

const arr3 = [...arr, ...arr2];
console.log(arr3);

//======================================//

const user = {
    name: "Jen",
    age: 22,
}

const clonedUser = { ...user };
console.log(clonedUser);

//======================================//