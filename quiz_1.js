// CALLBACK EXAMPLE CALLBACK EXAMPLE CALLBACK EXAMPLE
// This is the function that takes user input and a callback function
function takeInput(input, callback) { //input will be a string, while the callback will be a function
  console.log(`You just typed: ${input}!`);
    callback(`CALLBACK OUTPUT: This is the callback. In this case, the callback parameter is the "displayMessage" function.`);
}

// This is the function that is used for the callback. It will display the message that we passed to it when called on the other function
function displayMessage(message) {
  console.log(message);
}

// Here we call the takeInput function with a string and the displayMessage function as a callback
takeInput("This is a static input", displayMessage);

// PROMISE EXAMPLE PROMISE EXAMPLE PROMISE EXAMPLE
// We create a new Promise
const thisPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2); // Generates a random number, either 0 or 1
    if (rand === 1) {
      resolve("The promise was resolved successfully!"); // If the random number is 1, the promise is resolved
    } else {
      reject("The promise was rejected."); // If the random number is 0, the promise is rejected
    }
});

thisPromise.then(() => 
    console.log('PROMISE OUTPUT: Promise is Success!')) // This will run if the promise is resolved
    .catch(() => 
    console.error('PROMISE OUTPUT: Something went wrong with the promise!')); // This will run if the promise is rejected

// ASYNC/AWAIT EXAMPLE ASYNC/AWAIT EXAMPLE ASYNC/AWAIT EXAMPLE
async function asyncFunction() {
    try {
        const result = await thisPromise; // Wait for the promise to resolve
        console.log(`ASYNC/AWAIT OUTPUT: ${result}`); // If resolved, log the result
    } catch (error) {
        console.error(`ASYNC/AWAIT OUTPUT: ${error}`); // If rejected, log the error
    }
}

//Here we call the async function
asyncFunction();