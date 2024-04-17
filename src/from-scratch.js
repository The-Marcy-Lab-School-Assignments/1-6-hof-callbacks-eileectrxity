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

//Question 3: this .find version takes an array and a callback. now, this callback is different than the other two that it must return a boolean (or truthy/falsy value). you'll need to iterate through the given array, and call the callback on each value of the array. if the callback returns true, return the value itself from myFind. if the callback never returns true, then myFind returns undefined. do not modify the original array! this is important: the callback returns true or `false``, the HOF itself returns a value or undefined, ok?
const myFind = (arr, callback) => {
  for (let el of arr) { //for..of loop iterating through each element in a given array
     if (callback(el)) { //checking if the value from invoking the callback function on each element is truthy
      return el //returning the first element of a given array that met the condition of a truthy invocation
    };
  } 
  return undefined; //needs to be outside of the for loop as last resort. (note: on my first try, had it on line 39 as else return undefined but this was wrong --> in if..else statements, one or the other will always happen; in this case, when condition wasn't met, logic went immediately to the else statement returning undefined and stopping it there)
  };

// //printing q3 test to the console below
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];

// const nameHasB = myFind(myNames, (name) => name.includes('B'));
// console.log(nameHasB); // 'Bob' not 'Barry' because 'Bob' is first
// const nameHasZ = myFind(myNames, (name) => name.includes('Z'));
// console.log(nameHasZ); // undefined

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
