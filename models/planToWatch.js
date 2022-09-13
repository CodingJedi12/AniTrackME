const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planToWatchSchema = new Schema ({
    title: {type: String, required: true},
    image: {type: String, required: true},
    synopsis: {type: String, required: true},
    score: {type: Number, required: true},
});

const planToWatch = mongoose.model('Plan to Watch', planToWatchSchema);

module.exports = planToWatch;