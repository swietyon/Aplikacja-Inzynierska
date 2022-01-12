const mongoose = require('mongoose');


const excerciseSchema = new mongoose.Schema({
    excerciseName: {
        type: String,
        required: true
    },
    diseaseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease'
    }
});



mongoose.model('Excercise', excerciseSchema);