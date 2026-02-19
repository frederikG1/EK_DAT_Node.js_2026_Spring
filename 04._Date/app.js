const express = require('express');
const app = express();
app.use(express.json());

console.log(new Date()); // UTC date + time

console.log(Date()); // Local time

console.log(Date.now()) // Milli-Seconds since Jan. 1st 1970


// MONTHS
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get("/months/v1", (req, res) => {

    const currentMonth = new Date().getMonth();

    res.send({ data: `The month is: ${months [currentMonth]}`})
});


app.get("/months/v2", (req, res) => {
    const currentMonth = new Date().toLocaleDateString('default', {month: 'long'})

    res.send({data: currentMonth});
});


// DATES
const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/date/v1", (req, res) => {
    const currentDay = new Date().getDay();

    res.send({data: dates [currentDay]});
});

app.get("/date/v2", (req, res) => {
    const currentDay = new Date().toLocaleDateString('en-uk', {weekday: 'long'})

    res.send({data: currentDay});
});


/*
    falsy values:
    false, null, undefined, NaN, "" (empty strings)
*/

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }

    console.log("App is starting on localhost:8080")
});