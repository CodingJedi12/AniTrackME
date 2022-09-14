const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planToWatchSchema = new Schema ({
    title: {type: String, required: true},
    image: {type: String, required: true},
    synopsis: {type: String, required: true},
    audienceScore: {type: Number, required: true},
    userScore: {type: Number},
    haveWatched: {type: Boolean, default: false},
    mal_id: {type: Number, required: true},
});

const planToWatch = mongoose.model('Plan to Watch', planToWatchSchema);

module.exports = planToWatch;