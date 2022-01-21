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

const createAndSaveExcercise = () => {
    Excercise.create(diseaseArray,(error, data) => {
        if(error){
            console.log("Ćwiczenie już istnieje");
        }
        else{
            console.log(data);
        }
    })  
}