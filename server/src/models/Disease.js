const mongoose = require('mongoose');

const DiseasesSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    desc: {
        type: String,
    },
    imgLink: {
        type: String
    }
});

const Disease = mongoose.model('Disease', DiseasesSchema);

const createAndSaveDisease = () => {
    let shoulder = new Disease({
    title: "Rehabilitacja ramienia", 
    desc: "Opis rehabilitacji ramienia", 
    imgLink: "require('../img/shoulder.png')"
    });
    shoulder.save((error, data) => {
        if(error){
            console.log("Rekord już istnieje");
        }
        else{
            console.log(data);
        }
})
}

createAndSaveDisease();