//DEPENDENCIES
const express = require('express');
const router = express.Router();
const planToWatch = require('../models/planToWatch.js');

//INDEX
router.get('/', (req, res) => {
    res.send('Hey')
    // planToWatch.find({}, (err, anime) => {
    //     res.render('planToWatch/index.ejs', {
    //         anime: anime,
    //     });
    // })
})

//NEW
router.get('/new/:id', (req, res) => {
    fetch(`https://api.jikan.moe/v4/anime/${req.params.id}`)
    .then((response) => response.json())
    .then((data) => {
        res.render('plantowatch/new.ejs', {
            anime: data,
            // genres: data.data.genres.map(g => g.name).join(', '), //maps out the .name values to the g array
        })
    })
})
//DELETE

//UPDATE

//CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    planToWatch.create(req.body, (err, createdAnime) => {
        res.redirect('/plantowatch');
    })
});

//EDIT

//SHOW
router.get('/:id', (req, res) => {

})

module.exports = router