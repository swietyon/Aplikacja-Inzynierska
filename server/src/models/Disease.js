const mongoose = require('mongoose');



const DiseaseSchema = new mongoose.Schema({
    diseaseTitle: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default:''
    },
    imgLink: {
        type: String
    }
});




mongoose.model('Disease', DiseaseSchema);