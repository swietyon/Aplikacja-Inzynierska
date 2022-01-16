const mongoose = require('mongoose');

const CurrentDiseasesSchema = new mongoose.Schema({
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

const CurrentDisease = mongoose.model('CurrentDisease', CurrentDiseasesSchema);