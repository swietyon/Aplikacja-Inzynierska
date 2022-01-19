const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
    let diseaseArray = [
        {title: "Rehabilitacja ramienia", desc: "Opis rehabilitacji ramienia", imgLink: "require('../img/shoulder.png')"},
        {title: "Rehabilitacja pachwiny", desc: "Opis rehabilitacji pachwiny", imgLink: "require('../img/groin.png')"},
        {title: "Rehabilitacja kolana", desc: "Opis rehabilitacji kolana", imgLink: "require('../img/knee.png')"},
        {title: "Rehabilitacja dolnej partii pleców", desc: "Opis rehabilitacji dolnej partii pleców", imgLink: "require('../img/lowerback.png')"},
        {title: "Rehabilitacja górnej partii pleców", desc: "Opis rehabilitacji górnej partii pleców", imgLink: "require('../img/lowerback.png')"}
        ];
    Disease.create(diseaseArray,(error, data) => {
        if(error){
            console.log("Rekord już istnieje");
        }
        else{
            console.log(data);
        }
    });
};
    
// }
const diseaseModel = createAndSaveDisease();
console.log(diseaseModel);

// console.log(Disease.find({ title: "Rehablitacja kolana" }));


//find record where title = "Rehabilitacja pachwiny"
// mongoose.Promise = global.Promise;