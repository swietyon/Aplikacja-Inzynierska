const mongoose = require('mongoose');


const excerciseSchema = new mongoose.Schema({
    excerciseTitle: {
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