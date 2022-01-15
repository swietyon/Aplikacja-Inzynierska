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

// populate

mongoose.model('CurrentDisease', currendDiseasesSchema);