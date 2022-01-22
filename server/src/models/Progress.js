const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    grade: {
        type: Number,
    },
    userId: {
        type: String,
    },
    excName: {
        type: String
    }
});

const Progress = mongoose.model('Progress', ProgressSchema);