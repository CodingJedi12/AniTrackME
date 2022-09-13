//DEPENDENCIES
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

//==========================
//MIDDLEWARE
//==========================
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
const animeController = require('./controllers/anime.js');
const planToWatchController = require('./controllers/planToWatch.js')

//==========================
//DATABASE CONNECTION
//==========================
mongoose.connect(process.env.DATABASE_URL)

//==========================
//CONNECTION ERR0R/SUCCESS
//==========================
const db = mongoose.connection;
db.on('error', (err) => console.log(err + 'is mongo not running?'));
db.on('connected', () => console.log('connected'));
db.on('disconnected', () => console.log('disconnected'));

//==========================
//ROUTES
//==========================
app.use('/', animeController);
app.use('/plantowatch', planToWatchController);

//==========================
//CAN YOUU HEARRR MEEE
//==========================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('We are Live!'));