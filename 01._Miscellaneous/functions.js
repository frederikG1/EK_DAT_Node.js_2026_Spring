
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

//console.log(getRandomInt(4, 8))

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function genericActionPerfomer(name, action) {
     return action(name);
}

// function eatingAction(name) {
//     return `${name} is eating`
// } 

// console.log(genericActionPerfomer('Valdemar', eatingAction));
// console.log(genericActionPerfomer('Gustav', eatingAction))


// const runningAction = (name) => {
//     return `${name} is running`
// }

//console.log(genericActionPerfomer('Sidi', runningAction))

console.log(genericActionPerfomer('Kristian', (name) => `${name} is laughing`));