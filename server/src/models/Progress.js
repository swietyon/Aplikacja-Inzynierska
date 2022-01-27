const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    title: {
        type: String,
    },
    excNumb: {
        type: Number,
    },
    currentDate: {
        type: String,
    },
    grade: {
        type: Number,
    }
});

const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress;

