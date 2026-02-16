const express = require('express');
const app = express();
app.use(express.json());

let movies = [
    { id: 1, title: 'Garlic is as good as ten mother', year: 1992 },
    { id: 2, title: 'Microscopic Subway to Oblivion', year: 1995 }
];

let nextId = 3;

app.get("/movies", (req, res) => {
    res.send({ data: movies });
});


app.get("/movies/:id", (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);

    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id}` });
    } else {
        res.send(foundMovie);
    }
});


app.post('/movies', (req, res) => {
    if (!req.body.title) {
        return res.status(404).send({ errorMessage: `Title is required`});
        }

    const newMovie = {
        id: nextId++,
        title: req.body.title,
        year: req.body.year
    };

    movies.push(newMovie)
    res.status(200).send({data: newMovie})
});

app.delete('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);
    
    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id}` });
    } else {
        movies = movies.filter((movie) => movie.id !== providedMovieId);
        // NOTE: We do NOT decrement nextId - IDs are never reused!
        res.status(200).send({ data: foundMovie });
    }
});

app.patch('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);

    if(!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id}`})
    } else {
        if (req.body) (foundMovie.title) = req.body.title;
        if (req.body) (foundMovie.year) = req.body.year;

        res.status(200).send({data: foundMovie });
    }
});
/* 
    Status codes
2xx: Success
3xx: Redirection
4xx: Client error
5xx: Server error

*/


app.listen(8080);

/*
1. Create movie (gets ID 3)
curl -X POST http://localhost:8080/movies -H "Content-Type: application/json" -d '{"title": "Interstellar", "year": 2014}'

2. Create another (gets ID 4)
curl -X POST http://localhost:8080/movies -H "Content-Type: application/json" -d '{"title": "Inception", "year": 2010}'

3. Delete movie 3
curl -X DELETE http://localhost:8080/movies/3

4. Create another movie (gets ID 5, NOT 3!)
curl -X POST http://localhost:8080/movies -H "Content-Type: application/json" -d '{"title": "Dunkirk", "year": 2017}'
*/