const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage.html');
})





app.listen(8080, () => {
    console.log("App is starting on localhost:", 8080);
});