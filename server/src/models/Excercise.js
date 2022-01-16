const mongoose = require('mongoose');

const ExcercisesSchema = new mongoose.Schema({
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

const Excercise = mongoose.model('Excercise', ExcercisesSchema);