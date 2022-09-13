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
    })
})

//NEW


//DELETE
router.delete('/:id', (req, res) => {
    planToWatch.findByIdAndDelete(req.params.id, () => {
        res.redirect('/plantowatch')
    })
})
//UPDATE

//CREATE
router.post('/', (req, res) => {
    planToWatch.create(req.body, (err, createdAnime) => {
        res.redirect('/plantowatch');
    })
});

//EDIT

//SHOW
router.get('/:id', (req, res) => {

})

module.exports = router