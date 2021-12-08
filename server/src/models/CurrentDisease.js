const mongoose = require('mongoose');

const currendDiseasesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    diseaseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disease'
    }
});

mongoose.model('CurrentDisease', currendDiseasesSchema);