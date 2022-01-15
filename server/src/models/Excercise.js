const mongoose = require('mongoose');

const excerciseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    excDesc: {
        type: String,
    },
    videoLink: {
        type: String,
    },
    diseaseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease'
    }
});

mongoose.model('Excercise', excerciseSchema);