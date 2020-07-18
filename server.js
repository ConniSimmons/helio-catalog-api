// require/import all the things
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const config = require('./config');
const db = require('./db');

// define the app/server/whatever
const server = express();

// start db connection
db();

// Middleware goes here

// use cors if needed
server.use(cors());
// use expres json parser because body-parser sucks
server.use(express.json());

// import your DAO things
const Catalog = require('./api/catalog/catalog.dao');

// import what is essential our router factory function
const routerFactory = require('./api/router');

// Route
server.use('/', routerFactory(Catalog));

// get constants from my settings file
let { PORT, DBNAME } = require("./config");

// Listener
server.listen(PORT, (err) =>
{
    if (err)
    {
        console.log('There was an error starting server: ', err);
    }
    console.log(`${DBNAME} is listening on port ${PORT}...`);
});

// Logger
const requestLogger = (req, res, next) =>
{
        const now = new Date();
        console.log(`${now}:::> Incoming ${req.method} request to ${PORT}.`)
        next();
}
server.use(requestLogger);