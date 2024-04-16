//Lesson 1-6 Assignment: HOFs & Callbacks by Eileen
//challenge is to build from scratch: can't use the real array.forEach, array.map, array.find, array.filter methods

//Question 1: a function that takes two arguments, an array and a callback function. must pass each value from the given array into the provided callback (try a loop). the callback needs to be invoked by the function; only pass the value to the callback (no need to pass anything else). just like the real forEach, myForEach should return undefined and should not alter the passed in array by default. your callback's return value should be ignored.
const myForEach = (arr, callback) => {
  for (let el of arr) { //iterating through each element in a given array
    callback(el); //invoking a given callback function without returning it, passing the value of each element in a given array into it
  };
};

// //printing q1 test to the console below
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const result = myForEach(myNames, (name) => console.log(`Hi, ${name}!`)); //Hi, Alice!      Hi, Bob!      Hi, Charlie!     Hi, Debbie!

// console.log(result); // undefined
// console.log(myNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']

//Question 2: this .map version should return a new array made of the return values of the callback on each item. the callback here does need to return something, because each return value gets fed into the new array. do not modify the original array!
const myMap = (arr, callback) => {
  let newArr = []; //initializing the new array to hold the return value of the invocation of a given callback function on a given array, this way original function is not mutated
  for (let el of arr) { //iterating through each element in a given array
    newArr.push(callback(el)); //invoking the given callback function on each element in a given array and adding that modified element to the new array
  };
  return newArr //the final new array, with modified values from a given array after invoking a given callback function on it
};

// //printing q2 test to the console below
// const myNums = [1, 4, 9, 16];
// const myDoubledNums = myMap(myNums, (x) => x * 2); //pass a function to map

// console.log(myDoubledNums); //[2, 8, 18, 32]
// console.log(myNums); //[1, 4, 9, 16] (orig array is unaffected!)

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
