const express = require('express');
const morgan = require('morgan');
const path = require('path')
const superheroRoutes = require('./routes/superheroRoutes');
const favoriteRoutes = require('./routes/favoriteRoutres');

const app = express();
const port = 6969;

app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/superhero', superheroRoutes);
app.use('/favorites', favoriteRoutes);

app.listen(port, () => {
    console.log(`server kører på http://localhost:${port}`);
});