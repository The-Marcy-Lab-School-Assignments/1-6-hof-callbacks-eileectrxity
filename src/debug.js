//Question 10: original function- debug so that function returns true if every value in the array passes the callback test
// const myEvery = (arr, callback) => {
//   for (const value of arr) {
//     if (callback) return false;
//   }
//   return true;
// };

//debugged
const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false; //returns false if any value from the invocation of a given callback function on a given array fails the test
  }
  return true; //if all values passed the callback function onvocation test, then returns true
};

//Question 11: original function- debug so that function properly sorts a list of users by whatever sorting function is passed in. it's a more dynamic version of the code we've already written
// const sortUsersBy = (users, sortingFunction) => {
//   return [...users].sort(sortingFunction());
// };

//debugged
const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction); //corrected by passing the callback function into .sort() method without invoking it
};

const logEachName = (names) => {
  return names.forEach(console.log());
};

const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
