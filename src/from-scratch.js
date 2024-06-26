//Lesson 1-6 Assignment: HOFs & Callbacks by Eileen
//challenge is to build from scratch: can't use the real array.forEach, array.map, array.find, array.filter methods

//Question 1: a .forEach version that takes two arguments, an array and a callback function. must pass each value from the given array into the provided callback (try a loop). the callback needs to be invoked by the function; only pass the value to the callback (no need to pass anything else). just like the real forEach, myForEach should return undefined and should not alter the passed in array by default. your callback's return value should be ignored.
const myForEach = (arr, callback) => {
  for (let el of arr) { //iterating through each element in a given array
    callback(el); //invoking a given callback function without returning it, passing the value of each element in a given array into it
  };
};

// //printing q1 test to the console below
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const result = myForEach(myNames, (name) => console.log(`Hi, ${name}!`)); //Hi, Alice!      Hi, Bob!      Hi, Charlie!     Hi, Debbie!

// console.log(result); //undefined
// console.log(myNames); //['Alice', 'Bob', 'Charlie', 'Debbie']

//Question 2: a .map version should return a new array made of the return values of the callback on each item. the callback here does need to return something, because each return value gets fed into the new array. do not modify the original array!
const myMap = (arr, callback) => {
  let newArr = []; //initializing the new array to hold the return value of the invocation of a given callback function on a given array, this way original function is not mutated
  for (let el of arr) { //iterating through each element in a given array
    newArr.push(callback(el)); //invoking the given callback function on each element in a given array and adding that modified element to the new array
  };
  return newArr; //the final new array, with modified values from a given array after invoking a given callback function on it
};

// //printing q2 test to the console below
// const myNums = [1, 4, 9, 16];
// const myDoubledNums = myMap(myNums, (x) => x * 2); //pass a function to map

// console.log(myDoubledNums); //[2, 8, 18, 32]
// console.log(myNums); //[1, 4, 9, 16] (orig array is unaffected!)

//Question 3: a .find function version takes an array and a callback. now, this callback is different than the other two that it must return a boolean (or truthy/falsy value). you'll need to iterate through the given array, and call the callback on each value of the array. if the callback returns true, return the value itself from myFind. if the callback never returns true, then myFind returns undefined. do not modify the original array! this is important: the callback returns true or `false``, the HOF itself returns a value or undefined, ok?
const myFind = (arr, callback) => {
  for (let el of arr) { //for..of loop iterating through each element in a given array
     if (callback(el)) { //checking if the value from invoking the callback function on each element is truthy
      return el; //returning the first element of a given array that met the condition of a truthy invocation
    };
  };
  return undefined; //needs to be outside of the for loop as last resort. (note: on my first try, had it on line 39 as else return undefined but this was wrong --> in if..else statements, one or the other will always happen; in this case, when condition wasn't met, logic went immediately to the else statement returning undefined and stopping it there)
};

// //printing q3 test to the console below
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];

// const nameHasB = myFind(myNames, (name) => name.includes('B'));
// console.log(nameHasB); //'Bob' not 'Barry' because 'Bob' is first
// const nameHasZ = myFind(myNames, (name) => name.includes('Z'));
// console.log(nameHasZ); //undefined

//Question 4: a .filter version that returns a new array made up of all the values from the array that passed the callback's conditional. it takes an array and a callback, and returns a new array made up of all the values that passed the callback test. if no matches are found, it returns an empty array. do not modify the original array
const myFilter = (arr, callback) => {
  let filtArr = []; //initializing a new array to hold our filtered elements in
  for (let el of arr) { //for..of loop iterating through each element in a given array
     if (callback(el)) { //checking if the value from invoking the callback function on each element is truthy
      console.log(filtArr.push(el)); //if condition is met, push that current truthy element into the new filtered array
    };
  };
  return filtArr; //returning the final filtered array with all elements that passed the callback test; if no elements passed, then array will be empty
};

// //printing q4 test to the console below
// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const namesWithB = myFilter(myNames, (name) => name.includes('B'));
// console.log(namesWithB); //['Bob', 'Barry']

// const namesWithZ = myFilter(myNames, (name) => name.includes('Z'));
// console.log(namesWithZ); //[]

//Question 5: a .sort version takes in an array of words and must sort them in ascending order (remember: ascend => start small get big, descending => start big get small). for the purposes of letters, ascending alphabetical means start with "a.". must return the new sorted array; do not modify the passed in array! be careful, is that .sort's default behavior?
//using .sort() method (.toSorted() method not available in this node.js version yet)
const sortWords = (arr) => {
  let sortedArr = [...arr]; //initializing a shallow copy of a given array using the spread operator to not mutate the original array argument given
  return sortedArr.sort() //returning the new sorted array with the .sort() method invoked on it
}
// //ignore- before i realized we are allowed to use sort method; tried to do it from scratch
// const sortWords = (arr) => {
//   let sortArr = [];
//   for (let el of arr) { //getting used to for..of loops; iterating through each element in an array
//     sortArr.push(el);
//     console.log(el.charCodeAt(0), sortArr) //to help me debug
//       if (el.charCodeAt(0) > el.charCodeAt(1)) {
//         sortArr.push(el);
//     };
//   };
//   return sortArr;
// };

// //printing q5 test to the console below
// const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
// const sortedNames = sortWords(unsortedNames);

// console.log(sortedNames); //['Alice', 'Bob', 'Charlie', 'Debbie']
// console.log(unsortedNames); //['Charlie', 'Debbie', 'Alice', 'Bob']

//Question 6: a .sort numbers version that takes in an array of numbers and returns an array with the numbers sorted in ascending order. do not modify the original array!
const sortNumbers = (arr) => {
  let sortedNums = [...arr]; //spreading all elements of a given arr into a new array, creating a shallow copy (no nested elements/properties copied) to avoid modifying the original arr
  return sortedNums.sort((a,b) => a - b); //invoking the .sort() method on the new array copy, passing in the compareFn parameter function. this inline function compares two elements in the given arr. if the return value of subtracting an element, a, from a second element, b, is negative, then a should come before b- first element should be sorted before the second element and vice versa if value is positive
};

// //printing q6 test to the console below
// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const sortedNums = sortNumbers(unsortedNums);

// console.log(sortedNums); //[1, 2, 3, 11, 14, 100]
// console.log(unsortedNums); //[1, 100, 14, 3, 2, 11]

//Question 7: just like the above function, but now we can pass in a second boolean argument, isDescending. it will determine if we want to sort in ascending or descending order. if the second argument is true, sort descending. if the second argument is false, sort ascending (this is the default behavior). do not modify the original array!
const sortNumbersBetter = (arr, isDescending) => {
  let sortedNumsB = [...arr]; //same as previous function, copying/spreading given array elements into a new array
  if (isDescending === true) { //sort in descending order if given bool for descending is true
    return sortedNumsB.sort((a,b) => b - a); //sorting in descending order using .sort()
  } else return sortedNumsB.sort((a,b) => a - b); //if given bool is false or no argument given, sort in ascending order
};

// //printing q7 test to the console below
// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const bigToSmall = sortNumbersBetter(unsortedNums, true);
// console.log(bigToSmall); //[100, 14, 11, 3, 2, 1]

// const smallToBig = sortNumbersBetter(unsortedNums); //default param
// console.log(smallToBig); //[1, 2, 3, 11, 14, 100]

/* Question 8: now instead of sorting primitives, sort an array of objects- data is more complex than simple primitives can convey. sort an array of users that looks like this:
const users = [ { name: 'Alice', order: 1 }, ... ];
sort them by the order property, always ascending. do not modify the original array! */
const sortUsersByOrder = (arr) => {
  let sortedArr = [...arr]; //creating a shallow clone of a given array
  sortedArr.sort((a,b) => a.order - b.order); //sorting arr by the value of the order key property from the given array of objects
  return sortedArr; //returning the new copied array, sorted by the order property value
};

// //printing q8 test to the console below
// const users = [
//   { name: 'Alice', order: 1 },
//   { name: 'Bob', order: 3 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Debbie', order: 4 },
// ];

// const sortedUsers = sortUsersByOrder(users);
// console.log(sortedUsers); //logs:
// // [
// //   { name: 'Alice', order: 1 },
// //   { name: 'Charlie', order: 2 },
// //   { name: 'Bob', order: 3 },
// //   { name: 'Debbie', order: 4 },
// // ]


//Question 9: same as the previous function, but sorting by the name property instead. tricky as the default .sort behavior does do alphabetical orders, but you're comparing objects! can't just use the default behavior, have to use a callback. remember how .sort's callback actually sorts things (negative, 0, positive). do not modify the original array!
const sortUsersByName = (arr) => {
  let sortedArr = [...arr];
  sortedArr.sort((a,b) => {
    const aName = a.name.toLowerCase(); //lowercasing the string at the name key property to make make comparison between aName and bName case insensitive for consistent sorting results
    const bName = b.name.toLowerCase();
    return aName.localeCompare(bName)}); //.sort((a,b) => a.name - b.name) doesn't work because a.name and b.name are both strings, not numbers like a.order or b.order. localeCompare method compares the element strings unicode numbers
  return sortedArr;
};

// //printing q9 test to the console below
// const users = [
//   { name: 'Alice', order: 22 },
//   { name: 'Charlie', order: 28 },
//   { name: 'Diana', order: 40 },
//   { name: 'Bob', order: 32 },
// ];

// console.log(sortUsersByName(users)); //logs:
// [
//     { name: 'Alice', order: 22 },
//     { name: 'Bob', order: 32 },
//     { name: 'Charlie', order: 28 },
//     { name: 'Diana', order: 40 },
// ]

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
