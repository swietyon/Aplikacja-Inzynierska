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

const createAndSaveDisease = () => {
    let diseaseArray = [
        {
            key: 1,
            title: "Wzmocnienie ramienia", 
            desc: "Opis rehabilitacji ramienia", 
            imgLink: {
                uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711937/shoulder_tbmrdr.png"
            }, 
            excercises: [
                { 
                    key:1,
                    excTitle: "Aniołek przy śnianie", 
                    excDsc: "Rozpoczynamy w pozycji stojącej plecami do ściany. Podnosimy dłonie na wysokości głowy. Ręce, głowę, łokcie oraz górną część pleców mamy przyciągniętą do sciany. Staramy się podnosić ręce całkowicie do góry zachowując przy tym przyciągnięcie ich do ściany. Ważnym warunkiem ćwiczenia jest przerwa między ścianą a odcinkiem lędźwiowym kręgosłupa. Wykonujemy 10 powtórzeń po 3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:2,
                    excTitle: "Rozciąganie obręczy barkowej do wewnątrz", 
                    excDsc: "Rozpoczynamy w pozycji wyprostowanej stojącej. Słabszą rękę wyciągamy prosto przed siebie pod kątem prostym do tułowia. Drugą ręką staramy się chwycić zaraz nad łokciem słabszej ręki i przyciągnąć ją do siebie, zachowując pozycję równoległą słabszej ręki w pozycji do podłoża. Zachowaj pozycję w rozciągnięciu przez 15 sekund. Wykonujemy 5 powtórzeń po 3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:3,
                    excTitle: "Rozciąganie obręczy barkowej do tyłu", 
                    excDsc: "Rozpoczynamy w pozycji wyprostowanej stojącej. Złączamy zewnętrze części dłoni plecąc ręce ze sobą. Staramy się unieść ręce do góry do pozycji pionowej. Aby zwiększyć napięcie rozciągania możemy przeciągnąć ręcę jeszcze dalej za tułowie zachowując wciąż pozycję wyprostowaną. Zachowujemy pozycję napiętą przez 10-15 sekund po 3 powtórzenia. Staramy się wykonać 3 serie.",
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                }
            ]
        },
        {
            key: 2,
            title: "Wzmocnienie pachwiny", 
            desc: "Opis rehabilitacji pachwiny", 
            imgLink: {
                uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711943/groin_vosbcl.png"
            }, 
            excercises: [
                { 
                    key:1,
                    excTitle: "Zwiększenie rotacji zewnętrznej w pozycji leżącej", 
                    excDsc: "Zaczynamy w pozycji leżącej z delikatnym ugięciem w kolanach. Następnie podnosimy słabszą nogę i zakładamy ją za kostkę na ugiętą mocniejszą nogę. Będąc w takiej pozycji powinniśmy czuć rozciąganie pachwiny. Jeśli jesteśmy w stanie staramy się podnosiosić zdrową nogę trochę wyżej. Przy braku odpowiedniego napięcia możemy je zwiększyć obejmując udo naszej zdrowej nogi i przyciągając je do tułowia. Staramy utrzymać maksymalnie osiągalną przez nas pozycję przez około 45-60 sekund. Zalecane są 2-3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:2,
                    excTitle: "Siad płotkarski z nachyleniem", 
                    excDsc: "Rozpoczynamy ćwiczenie będąc w siadzie płotkarskim dbając, aby nasza słabsza noga była zgięta pod kątem prostym w stosunku do zdrowej wyprostowanej nogi. Nasze tułowie powinno być prosto ułożonym przedłużeniem dla zgiętej nogi. Kiedy nie czujemy wystarczającego napięcia i chcemy je zwiększyć należy wyprostować plecy. Utrzymujemy taką pozycję przez około 60 sekund. Zalecane są 2-3 serie. Najważniejszym aspektem ćwiczenia jest odczuwanie rozciągania w biodrze oraz pachwinie słabszej nogi. ", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:3,
                    excTitle: "Rozciąganie pachwiny na krześle z rozwartymi nogami ", 
                    excDsc: "Pozycją wyjściową jest pozycja siedząca na krześle z kolanami ugiętymi w kącie prostym. Zachowując wyprostowaną pozycję ustawiamy stopy trochę szerzej niż biodra. Kolana staramy się rozepchnąć do zewnątrz. Z takiej pozycyji starając się nie ruszać stopami zwężamy kolana do środka. Pozostając w takiej pozycji powinniśmy odczuć wrażenie naciągania pachwiny. Jeżeli odczuwamy ból należy zmniejszyć odległość stóp między sobą. Zmniejszy to również napięcie rozciągania pachwiny. Dbamy o wyprostowane plecy przy wykonywaniu ćwiczenia. Zalecamy zachowanie takiej pozycji przez około 120 sekund po 2 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                }
            ]
        },
        {
            key: 3,
            title: "Wzmocnienie kolana", 
            desc: "Opis rehabilitacji kolana", 
            imgLink: {
                uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711946/knee_aibxek.png"
            }, 
            excercises: [
                { 
                    key:1,
                    excTitle: "Wzmocnienie mięśnia czworogłowego uda", 
                    excDsc: "Do ćwiczenia potrzebujemy stabilny podest przed sobą o wysokości około 30-40cm. Ćwiczenia polega na wychodzeniu na podest jedną nogą. Zaraz po wyjściu płynnym ruchem podciągamy drugą nogę pod kątem prostym do własnego ciała, a następnie opuszczamy ją spowrotem na ziemię. Zaraz po tym ruchu schodzimy całą osobą z podestu. Ćwiczenie to powtarzamy od 15 do 30 razy w zależności od stopnia zaawansowania. Zalecamy 3 serie na każde kolano. Bardzo ważnym warunkiem tego ćwiczenia jest zachowanie wyprostowanej postawy oraz prowadzenie nóg prosto w kierunku podestu. Prawidłowe wykonywanie ćwiczenia zmniejsza ryzyko pojawienia się, bądź pogłębienia urazów.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:2,
                    excTitle: "Rozciąganie mięśnia kolanowego w pozycji leżącej. ", 
                    excDsc: "W wykonaniu ćwiczenia pomoże nam przykładowo ręcznik złożony na cztery części. Ćwiczenie wykonujemy wyjściowo w pozycji leżącej. Wspomniany ręcznik należy podłożyć pod strzelinę stawu kolanowego. Staramy się uzyskać zgięcie kolana chwytając dłońmi tuż nad stawem skokowym oraz przyciągając całą dolną część nogi do uda do tego stopnia aby poczuć rozciąganie w przedniej części kolana. Ważnym elementem ćwiczenia jest pozycjonowanie uda w kącie prostym w stosunku do tułowia naszego ciała oraz prowadzenie zgięcia prosto, nie skrzywiając zbytnio dolnej części nogi w stosunku do górnej części. Zalece jest utrzymanie danego napięcia w kolanie przez około 15 sekund po 3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:3,
                    excTitle: "Rozciąganie mięśnia czworogłowego w siadzie klęcznym", 
                    excDsc: "Pozycją wyjściową jest klęk podparty. Będąć w danej pozycji staramy się zbliżać pośladki w stronę pięt pulsacyjnie. Ważnym warunkiem ćwiczenia jest uczucie rozciągnięcia mięśnia czworogłowego. W miare możliwości staramy się przejść całkowicie do siadu klęcznego próbując dotknąć dłońmi podłoża na wysokości naszych stóp. W ten spsób jesteśmy w stanie rozciągnąć również górną partię mięśni czworogłowych. Staramy się wykonać 5 powtórzeń po 3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                }
            ]
        },
        {
            key: 4,
            title: "Wzmocnienie dolnej partii pleców", 
            desc: "Opis rehabilitacji dolnej partii pleców", 
            imgLink: {
                uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711934/lowerback_j583j0.png"
            }, 
            excercises: [
                { 
                    key:1,
                    excTitle: "Podnoszenie kończyn na przeciw", 
                    excDsc: " Przyjmujemy pozycję leżącą na brzuchu z rękoma wysuniętymi przed siebie niczym przedłużenie naszego ciała. Ważnym warunkiem jest przyciągnięcie głowy do podłoża (np. opieranie się podbródkiem). Ćwiczenie to opieramy na oddechu. Nabieramy powietrza a następnie stosując wydech podnosimy delikatnie nad ziemię równocześnie lewą rękę i przeciwległą nogę. Zatrzymując ruch nabieramy znów powietrza, a wypuszczając opuszczamy kończyny na ziemię. Wykonujemy ćwiczenie kończynami na przemian stosując po 5 powtórzeń na każdą stronę. Zalecane są 3 serie tego ćwiczenia. ", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:2,
                    excTitle: "Podciąganie kolan w pozycji leżącej ", 
                    excDsc: "Przyjmujemy pozycję leżącą na brzuchu z dłoniami podpierającymi pobródek. Zachowując prostą pozycję leżącą staramy się podciągać kolano jednej nogi do kąta 120 stopni. Stosujemy 10 powtórzeń na każdą nogę. Zalecane są 3 serie tego ćwiczenia.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:3,
                    excTitle: "Wyciąganie kończyn przeciwległych przy podparciu ", 
                    excDsc: "Przyjmujemy pozycję siadu na kolanach w podparciu dłońmi. Wraz z uniesieniem prawej dłoni unosimy równoczeniśnie przeciwległą nogę w taki sposób aby nasze kończyny były w pozycji równoległej w stosunku do podłoża. Ważnym warunkiem ćwiczenia jest zachowanie wyprostowanego odcinka lędźwiowego pleców. Wykonujemy 10 powtórzeń na każdą stronę. Zalecane są 3 serie tego ćwiczenia.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                }
            ]
        },
        {
            key: 5,
            title: "Wzmocnienie górnej partii pleców", 
            desc: "Opis rehabilitacji górnej partii pleców", 
            imgLink: {
                uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711940/upperback_jqa9pi.png"
            }, 
            excercises: [
                { 
                    key:1,
                    excTitle: "Przeniesienie ciężaru na dwie strony w podparciu ", 
                    excDsc: "Przyjmujemy pozycję siadu na kolanach w podparciu dłońmi. Wykonujemy ruch na boki górną częścią tułowia. Przy wykonywaniu tego ćwiczenia ważne jest aby w miarę możliwości pozostawić biordra w pozycji nieruchomej. Stosujemy 5 powtórzeń na każdą stronę. Zalecane są 3 serie ćwiczenia.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:2,
                    excTitle: "Ruch ręką w podparciu ", 
                    excDsc: "Przyjmujemy pozycję siadu na kolanach w podparciu dłońmi. Odrywamy jedną dłoń od podłoża i za pomocą delikatnego skrętu tułowiem podnosimy ją do góry. Następnie staramy się ją opuścić oraz przejść nią nieco za naszą drugą dłoń. Powtarzamy moment ruchu na obie strony pięciokrotnie. Ważnym warunkiem tego ćwiczenia jest zachowanie wyprostowanych pleców oraz wykonywanie ruchów powoli z wysoką dokładnością. Wykonujemy 5 powtórzeń na każdą rękę. Zalecane są 3 serie.", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                },
                { 
                    key:3,
                    excTitle: "W siadzie łączenie łopatek ", 
                    excDsc: "Przyjmujemy pozycję siedzącą na podłożu z wyprostowanymi złączonymi nogami. Do tego ćwiczenia przyda nam się ręcznik zwinięty na 4 części. Owijamy ręcznik za stopy i mając wyprostowane plecy staramy się dociągnąć ręcznik do siebie nie zginając łokci. Ważnym warunkiem jest ściąganie łopatek do siebie podczas tego ćwiczenia. Utrzymujemy pozycję napiętą przez 3 sekundy. Powtarzamy ćwiczenie 10 razy stosując 3 serie. ", 
                    videoLink:{uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}
                }
            ]
        }
        ];

    Disease.create(diseaseArray,(error, data) => {
        if(error){
            console.log("Diseases already exists");
        }
        else{
            console.log(data);
        }
    })  
}

createAndSaveDisease();