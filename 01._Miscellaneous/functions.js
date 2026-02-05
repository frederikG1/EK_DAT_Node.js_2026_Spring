
// hoisting
// console.log(getRandomInt(4, 8));


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};


// JavaScript: functions as first-class citizens

                            // string, function reference
function genericActionPerformer(name, action) {
    return action(name);
}

// task: eat, Valdemar
// declare a function below called eatingAction 
// and use the genericActionPerformer to 
// console.log `Valdemar is eating`

function eatingAction(name) {
    return `${name} is eating`;
}

console.log(genericActionPerformer('Valdemar', eatingAction));
console.log(genericActionPerformer('Gustav', eatingAction));

// task, run, Sidi
// declare an anonymous function called runningAction
// make it return `Sidi is running`
// console.log it

const runningAction = (name) => {
    return `${name} is running`;
};

console.log(genericActionPerformer('Sidi', runningAction));

// task: extra challenge
// Write a one-liner below that uses genericActionPerformer
// which prints: Kristian is laughing

console.log(genericActionPerformer('Kristian', (name) => `${name} is laughing`));


