const mongoose = require('mongoose');

const RulesSchema = new mongoose.Schema({
    key: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    }
});

const Rule = mongoose.model('Rule', RulesSchema);
module.exports = Rule;


// const createAndSaveRules = () => {
//     let ruleArray = [
//         // { title: 'Zasada pierwsza', description: "Przed rozpoczęciem ćwiczeń należy skonsultować się z lekarzem w celu zdiagnozowania urazu oraz wyeliminowania przeciwwskazań zdrowotnych mogących mieć wpływ na zdrowie lub bezpieczeństwo ćwiczącego.", key: '1' },
//         // { title: 'Zasada druga', description: "Ćwiczenia powinny być wykonywane na terenie płaskim, stabilnym. Zadbaj aby podłoże było suche, a pomieszczenie dobrze oświetlone", key: '2' },
//         // { title: 'Zasada trzecia', description: "Na czas ćwiczeń zalecamy założyć wygodną odzież sportową, która nie będzie ograniczać ruchów ćwiczącego.", key: '3' }, 
//         // { title: 'Zasada czwarta', description: "Ćwiczenia powinny być wykonywane zgodnie z wizualizacją zamieszczoną na filmiku oraz zgodnie z opisem, który znajduje się pod danym video określającym ćwiczenia", key: '4' },
//         // { title: 'Zasada piąta', description: "Zestawy ćwiczeniowe powinny być dostosowane do wymaganej przez użytkownika skali trudności", key: '5' },
//         // { title: 'Zasada szósta', description: "Ilość serii oraz powtórzeń powinna być progresywna (rosnąco)", key: '6' }, 
//         // { title: 'Zasada siódma', description: "Podczas treningu ważna jest obserwacja sygnałów ciała. Niepoprawne lub nadmierne wykonywanie ćwiczeń mogą narazić zdrowie ćwiczącego. Jeżeli podczas ćwiczeń wystąpią niepowołane bóle mięśniowe, ucisiki w klatce piersiowej, nieregularna praca serca, zawroty głowy lub mdłości należy natychmiast zakończyć bieżące ćwiczenia.", key: '7' },
//         // { title: 'Zasada ósma', description: "Zaczynając wykonywanie danego ćwiczenia należy przyjąć postawę wyjściową według zaleceń widocznych na filmiku przedstawiającym dane ćwiczenie", key: '8' },
//         // { title: 'Rozgrzewka', description: "Przed przystąpieniem do ćwiczeń zalecane jest rozgrzanie danych partii mięśniowych", key: '9' },
//         // { title: 'Twórcy', description: "Maksymilian Świętoń", key: '10'}
//         ];

//     Rule.create(ruleArray,(error, data) => {
//         if(error){
//             console.log("Rules already exists");
//         }
//         else{
//             console.log(data);
//         }
//     })  
// }

// createAndSaveRules();