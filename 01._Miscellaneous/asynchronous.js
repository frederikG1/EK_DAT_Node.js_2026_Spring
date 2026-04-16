// JavaScript is single-thread, everything runs in the main thread

// Examples of blocking operations:
// network, database, file handling, hardware, user inputs

// Solution 1: Callback functions

// Problem: Callback hell, Pyramid of doom
// Basically bare at man kan komme til at neste dem inde i hinanden, det ser dumt ud

// Solution 2: Promises

// pending, fulfilled
//          resolved, rejected

// Problem: Nested promises

// Solution 3: Async / Await (just syntactic sugar, uses promises under the hood)





new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw "Oh no!";
      resolve("Everything went well");
    } catch (error) {
      reject(error);
    }
  }, 2000);
})
  .then((successMessage) => console.log(successMessage))
  .catch((errorMessage) => console.log(errorMessage));


function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("Something good");
      } catch (error) {
        reject("Something bad");
      }
    }, 3000);
  });
}

// myPromise()
// .then((successMessage) => console.log(successMessage))
// .catch((errorMessage) => console.log(errorMessage));

const successMessage = await myPromise();
console.log(successMessage);

// promise.then((resolve) => {
//     console.log(resolve);
// });
