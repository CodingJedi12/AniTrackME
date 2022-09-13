//DEPENDENCIES
const express = require('express');
const router = express.Router();
const planToWatch = require('../models/planToWatch.js')

//INDEX
router.get('/', (req, res) => {
    fetch('https://api.jikan.moe/v4/anime')
    .then((response) => response.json())
    .then((data) => {
        res.render('anime/index.ejs', {
            anime: data,
        })
    });
});

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW
router.get('/:id', (req, res) =>
{const url = `https://api.jikan.moe/v4/anime/${req.params.id}`;
fetch(url)
    .then((response) => {
        // if our response from the API is NOT okay:
        if (!response.ok) {
            throw new Error('Failed to fetch!');
        }

        return response.json();
    })
    .then((json) => {
        res.render('anime/show.ejs', {
            anime: json,
            genres: json.data.genres.map(g => g.name).join(', '), //maps out the .name values to the g array
        })
    }).catch(err => {
        //handles errors by rendering error page:
        console.error('Error', err);
        res.render('anime/error.ejs', {
            id: req.params.id,
            url,
        });
    });
});

module.exports = router