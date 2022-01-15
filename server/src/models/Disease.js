const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    imgLink: {
        type: String
    }
});

mongoose.model('Disease', DiseaseSchema);