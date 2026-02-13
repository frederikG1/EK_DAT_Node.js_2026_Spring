// .forEach  .map  .filter  .reduce  .sort  .find  .indexOf

// rule 1: use loop methods whenever possible
// rule 2: only use for loops in JavaScript for finger counting
// rule 3: use map over forEach if you need the data aftwerwards

const numbers = [1, 2, 3, 4, 5];

// task: double the numbers

// .map maps 1:1 to a new array

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

// console.log(doubledNumbers);


const balloonAnimals = [
    { type: "Koala", difficulty: 5.0 },
    { type: "Dog", difficulty: 2.5 },
    { type: "Giraffe", difficulty: 1.5, isTall: true },
];

// task: Make all the difficulty levels for the balloon animals 3.0 except for Koala

const difficultyAdjustedBallonAnimals = balloonAnimals.map((balloonAnimal) => {
    if (balloonAnimal.type !== 'Koala') {
        balloonAnimal.difficulty = 3.0
    }
    return balloonAnimal;
});

// console.log(balloonAnimals);
// console.log(difficultyAdjustedBallonAnimals);

// ternary statement
// condition ? if true : if false

const difficultyAdjustedBallonAnimalsOneLiner = balloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimal.type !== 'Koala' ? 3.0 : balloonAnimal.difficulty,
    ...balloonAnimal
}));

console.log(difficultyAdjustedBallonAnimalsOneLiner);

numbers.map((element, index, originalArray) => console.log(element, index, originalArray));
