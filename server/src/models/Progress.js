const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    grade: {
        type: Number,
    },
    comparing_user_id: {
        type: String,
    },
    comparing_excercise_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease'
    }
});

mongoose.model('Progress', ProgressSchema);