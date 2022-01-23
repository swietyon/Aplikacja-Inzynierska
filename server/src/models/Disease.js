const mongoose = require('mongoose');

const DiseasesSchema = new mongoose.Schema({
    key: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    desc: {
        type: String,
    },
    imgLink: [],
    excercises: []
});

const Disease = mongoose.model('Disease', DiseasesSchema);
module.exports = Disease;

// const createAndSaveDisease = () => {
//     let diseaseArray = [
//         {
//             key: 1,
//             title: "Wzmocnienie ramienia", 
//             desc: "Opis rehabilitacji ramienia", 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711937/shoulder_tbmrdr.png"
//             }, 
//                 excercises: [
//                 { 
//                     key:1,
//                     excTitle: "Aniołek przy śnianie", 
//                     excDsc: "Opis ćwiczenia", 
//                     videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
//                 },
//                 { 
//                     key:2,
//                     excTitle: "Rozciąganie obręczy barkowej do wewnątrz", 
//                     excDsc: "Opis ćwiczenia", 
//                     videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
//                 },
//                 { 
//                     key:3,
//                     excTitle: "Rozciąganie obręczy barkowej do tyłu", 
//                     excDsc: "Opis ćwiczenia", 
//                     videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
//                 }
//             ]
//         },
//         {
//             key: 2,
//             title: "Wzmocnienie pachwiny", 
//             desc: "Opis rehabilitacji pachwiny", 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711943/groin_vosbcl.png"
//             }
//         },
//         {
//             key: 3,
//             title: "Wzmocnienie kolana", 
//             desc: "Opis rehabilitacji kolana", 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711946/knee_aibxek.png"
//             }
//         },
//         {
//             key: 4,
//             title: "Wzmocnienie dolnej partii pleców", 
//             desc: "Opis rehabilitacji dolnej partii pleców", 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711934/lowerback_j583j0.png"
//             }
//         },
//         {
//             key: 5,
//             title: "Wzmocnienie górnej partii pleców", 
//             desc: "Opis rehabilitacji górnej partii pleców", 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711940/upperback_jqa9pi.png"
//             }
//         }
//         ];

//     Disease.create(diseaseArray,(error, data) => {
//         if(error){
//             console.log("Diseases already exists");
//         }
//         else{
//             console.log(data);
//         }
//     })  
// }

// createAndSaveDisease();

// // Disease.find({}, (error, data) => {
// //     if(error){
// //         console.log("Rekord już istnieje");
// //     }
// //     else{
// //         console.log(data);
// //     }
// // });