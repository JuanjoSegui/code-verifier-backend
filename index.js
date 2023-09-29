const express = require('express');
const dotenv = require('dotenv');

// configuration .env file
dotenv.config();

//Create Express app
const app = express();
const port = process.env.PORT || 8000;

//Define fist route of app

app.get('/', (req, res) => {
    //Send Hello World
    res.send('APP express + TS + Swagger + Mongoose');
});

//Execute app

app.listen(port, () => { console.log(`Express Server: Running at localhost:8000:${port}`) })