//import express 
const express = require('express');
//instansiate express
const app = express();

//one-liner version:
//const app = require('express')();


app.get('/', (req, res) => {
    res.send({data: "Hello"})
});

app.get('/snowstorm', (req, res) => {
    res.send("snowstorm is coming")
});


//how can we send data in a GET request?

//query string / query parameters
//?parametername=value (?firstitem=banana)
//?parametername=value&secondparamater=value
app.get("/bag", (req, res) => {
    res.send({data: req.query} )
});


//path variable
//a callback function is a function that is passed as an argument to another function
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({data: `Your ${req.params.carModel} from ${req.params.year} is very nice`});
});

//listen to a port
app.listen(8080, () => {
    console.log("Server is running on localhost:8080")
});



