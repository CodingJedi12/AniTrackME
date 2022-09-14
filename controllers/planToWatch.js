//DEPENDENCIES
const express = require('express');
const router = express.Router();
const planToWatch = require('../models/planToWatch.js');

//INDEX
router.get('/', (req, res) => {
    planToWatch.find({}, (err, anime) => {
        res.render('planToWatch/index.ejs', {
            anime: anime,
        });
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    planToWatch.findByIdAndDelete(req.params.id, () => {
        res.redirect('/plantowatch')
    });
});
//UPDATE
router.put('/:id', (req, res) => {
    req.body.haveWatched = req.body.haveWatched === "on" || false;
    planToWatch.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, anime) => {
        res.redirect('/plantowatch')
    })
})

//CREATE
router.post('/', (req, res) => {
    planToWatch.create(req.body, (err, createdAnime) => {
        res.redirect('/plantowatch');
    });
});

//EDIT
router.get('/:id/edit', (req, res) => {
    planToWatch.findById(req.params.id, (err, anime) => {
        res.render('plantowatch/edit.ejs', {
        anime: anime,
        });
    });
});

//SHOW
router.get('/:id', (req, res) => {

});

module.exports = router