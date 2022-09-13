const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistSchema = new Schema ({
    title: {type: String, required: true},
    image: {type: String, required: true},
    synopsis: {type: String, required: true},
    score: {type: Number, required: true},
});

const watchlist = mongoose.model('Watchlist', watchlistSchema);

module.exports = watchlist;