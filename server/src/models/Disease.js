const mongoose = require('mongoose');



const DiseaseSchema = new mongoose.Schema({
    diseaseName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default:''
    },

});




mongoose.model('Disease', DiseaseSchema);