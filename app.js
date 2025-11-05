const express = require('express');
const morgan = require('morgan');
const path = require('path');

const superheroRoutes = require('./routes/superheroRoutes');
const favoriteRoutes = require('./routes/favoriteRoutres');

const errorHandler = require('./middlewares/errorHandler');
const ratelimiter = require('./middlewares/ratelimiter');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(ratelimiter);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/superhero', superheroRoutes);
app.use('/favorites', favoriteRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server kører på http://localhost:${port}`);
});