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

// const createAndSaveDisease = () => {
//     let diseaseArray = [
//         {title: "Rehabilitacja ramienia", desc: "Opis rehabilitacji ramienia", imgLink: "require('../img/shoulder.png')"},
//         {title: "Rehabilitacja pachwiny", desc: "Opis rehabilitacji pachwiny", imgLink: "require('../img/groin.png')"},
//         {title: "Rehabilitacja kolana", desc: "Opis rehabilitacji kolana", imgLink: "require('../img/knee.png')"},
//         {title: "Rehabilitacja dolnej partii pleców", desc: "Opis rehabilitacji dolnej partii pleców", imgLink: "require('../img/lowerback.png')"},
//         {title: "Rehabilitacja górnej partii pleców", desc: "Opis rehabilitacji górnej partii pleców", imgLink: "require('../img/lowerback.png')"}
//         ];
//     Disease.create(diseaseArray,(error, data) => {
//         if(error){
//             console.log("Rekord już istnieje");
//         }
//         else{
//             console.log(data);
//         }
//     })
    
// }
// createAndSaveDisease();


//find record where title = "Rehabilitacja pachwiny"
Disease.find({title: "Rehabilitacja pachwiny"}, (error, data) => {
    if(error) {
        console.log(error);
    }
    else{
        console.log(data);
    }
})