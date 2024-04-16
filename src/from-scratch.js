//Lesson 1-6 Assignment: HOFs & Callbacks by Eileen
//challenge is to build from scratch: can't use the real array.forEach, array.map, array.find, array.filter methods

//Question 1: a function that takes two arguments, an array and a callback function. must pass each value from the given array into the provided callback (try a loop). the callback needs to be invoked by the function; only pass the value to the callback (no need to pass anything else). just like the real forEach, myForEach should return undefined and should not alter the passed in array by default. your callback's return value should be ignored.
const myForEach = (arr, callback) => {
  for (let el of arr) { //iterating through each element in a given array
    callback(el); //invoking a given callback function without returning it, passing the value of each element in a given array into it
  };
};

//printing q1 test to the console below
const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
const result = myForEach(myNames, (name) => console.log(`Hi, ${name}!`)); //Hi, Alice!      Hi, Bob!      Hi, Charlie!     Hi, Debbie!

console.log(result); // undefined
console.log(myNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']

const myMap = () => {
};

const myFind = () => {
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
