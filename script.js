// Silnik Gry - Eidolon Visual Novel: Część I - Rozdział 1

const story = [
    // --- PROLOG ---
    {
        id: 1,
        speaker: "SYSTEM",
        text: "Czarny ekran. Słychać deszcz uderzający o szyby. Po chwili rozbrzmiewa sygnał budzika...",
        bg: "black.jpg",
        time: "06:42 | Poniedziałek"
    },
    {
        id: 2,
        speaker: "BOHATER",
        text: "Otwieram oczy. Leżę w nieznanym łóżku. Na suficie widzę pęknięcie w kształcie cienkiej linii.",
        bg: "pokoj.jpg",
        choices: [
            { text: "Wstań natychmiast.", nextId: 3 },
            { text: "Spróbuj sobie przypomnieć, gdzie jesteś.", nextId: 3 },
            { text: "Zostań jeszcze chwilę w łóżku.", nextId: 3 }
        ]
    },
    {
        id: 3,
        speaker: "BOHATER",
        text: "Siadam na łóżku i patrzę na dłonie. Brak krwi, brak obrażeń. A jednak... czuję, jakby to ciało nie należało do mnie.",
        bg: "pokoj.jpg"
    },
    // --- SCENA 1: MIESZKANIE 8B ---
    {
        id: 4,
        speaker: "BOHATER",
        text: "Wstaję i podchodzę do ściany. Wiszą na niej trzy fotografie. Jedna przedstawia mnie przed kawiarnią obok uśmiechniętej dziewczyny.",
        bg: "pokoj.jpg",
        choices: [
            { text: "Zbadaj zdjęcie dokładniej.", nextId: 5 },
            { text: "Odłóż je i przejdź do łazienki.", nextId: 6 }
        ]
    },
    {
        id: 5,
        speaker: "BOHATER",
        text: "Odwracam zdjęcie. Ręczny napis głosi: 'Nasz pierwszy poniedziałek'. Na zegarku dziewczyny ze zdjęcia widnieje 06:42. Zegar na ścianie również pokazuje 06:42... i nie tyka.",
        bg: "zdjecie_zburzenie.jpg",
        nextId: 6
    },
    // --- SCENA 2: LUSTRO ---
    {
        id: 6,
        speaker: "BOHATER",
        text: "Wchodzę do łazienki i spoglądam w lustro. 'Kim ty właściwie jesteś?'. Moje odbicie porusza ustami minimalnie za późno... Zmęczenie?",
        bg: "lustro.jpg"
    },
    // --- SCENA 3: TELEFON ---
    {
        id: 7,
        speaker: "SYSTEM",
        text: "Na stole dzwoni telefon. Ekran pokazuje: 12 NIEODEBRANYCH POŁĄCZEŃ - MARA.",
        bg: "telefon.jpg",
        choices: [
            { text: "Odbierz połączenie.", nextId: 8 },
            { text: "Nie odbieraj.", nextId: 9 }
        ]
    },
    {
        id: 8,
        speaker: "MARA",
        text: "«W końcu... Kim jesteś? Nie pamiętasz? To dobrze. To znaczy, że tym razem obudziłeś się wcześniej.» (Połączenie rozłączone)",
        bg: "telefon.jpg",
        nextId: 10
    },
    {
        id: 9,
        speaker: "WIADOMOŚĆ",
        text: "«MARA: Jeżeli nie pamiętasz, nie wychodź z mieszkania. Naprawdę. Tym razem mnie posłuchaj.»",
        bg: "telefon.jpg",
        nextId: 10
    },
    // --- SCENA 4: DRZWI ---
    {
        id: 10,
        speaker: "BOHATER",
        text: "Podchodzę do wyjścia. Na klamce wisi kartka: NIE WYCHODŹ PRZED 08:00. Na zegarku 07:18.",
        bg: "drzwi.jpg",
        choices: [
            { text: "Posłuchaj ostrzeżenia.", nextId: 11 },
            { text: "Wyjdź natychmiast.", nextId: 11 }
        ]
    },
    // --- SCENA 5: PIERWSZY KONTAKT Z MIASTEM ---
    {
        id: 11,
        speaker: "BOHATER",
        text: "Otwieram drzwi. Miasto jest ogromne. Wieżowce toną w mgle, tramwaje kursują. Wszystko wygląda normalnie... aż za bardzo.",
        bg: "zdjecie_zburzenie.jpg",
        time: "07:55 | Ulica 8"
    },
    {
        id: 12,
        speaker: "MARA",
        text: "«Wyglądasz, jakbyś zobaczył je pierwszy raz.» Odwracam się. To dziewczyna ze zdjęcia. Mara.",
        bg: "pokoj.jpg"
    },
    {
        id: 13,
        speaker: "MARA",
        text: "«Znam cię? Zależy... od tego, czy dzisiaj jest naprawdę pierwszy dzień.»",
        bg: "pokoj.jpg"
    },
    // --- SCENA 6: KAWA ---
    {
        id: 14,
        speaker: "MARA",
        text: "Siadamy w kawiarni. Mara podaje mi filiżankę: «Pijesz czarną. Zawsze piłeś czarną. Poznaliśmy się 3 lata temu. Ostatnio rozmawialiśmy wczoraj.»",
        bg: "pokoj.jpg"
    },
    {
        id: 15,
        speaker: "BOHATER",
        text: "Biorę łyk. «...Nie lubię. Nie lubię czarnej kawy.» Mara zamiera w bezruchu: «Nigdy wcześniej tego nie powiedziałeś...»",
        bg: "pokoj.jpg"
    },
    // --- SCENA 7: PIERWSZA NIEMOŻLIWA RZECZ ---
    {
        id: 16,
        speaker: "BOHATER",
        text: "Wychodzimy. Zegar na budynku pokazuje 08:03. Mara szepcze: «Nie patrz. Bo go nie będzie.» Odwracam wzrok i patrzę znowu.",
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 17,
        speaker: "MARA",
        text: "Zegar nadal tam jest i pokazuje 08:04. Mara błętnieje z przerażenia: «Nie... To nie powinno się wydarzyć.»",
        bg: "zdjecie_zburzenie.jpg"
    },
    // --- SCENA 8: ULICA NUMER 17 ---
    {
        id: 18,
        speaker: "MARA",
        text: "Stajemy przy Ulicy 17. Mara zatrzymuje mnie: «Tutaj zobaczysz coś, czego nie powinieneś. Swój poprzedni dzień.»",
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 19,
        speaker: "BOHATER",
        text: "Na końcu ulicy stoi mężczyzna w mojej kurtce. To ja sam. Biegnę za nim, mimo że Mara krzyczy 'NIE!'. Znika za rogiem.",
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 20,
        speaker: "BOHATER",
        text: "Na chodniku leży kartka: 'Nie ufaj Marze'. Mara patrzy na nią cicho: «To zaczyna się wcześniej niż ostatnio...»",
        bg: "zdjecie_zburzenie.jpg"
    },
    // --- SCENA 9: DOM ---
    {
        id: 21,
        speaker: "MARA",
        text: "Odprowadza mnie pod drzwi: «Nie wychodź dziś po zmroku. O północy ulica zmienia numerację.»",
        bg: "drzwi.jpg"
    },
    // --- SCENA 10: PUSTE MIESZKANIE ---
    {
        id: 22,
        speaker: "BOHATER",
        text: "Wchodzę do kuchni. Na stole stoi druga, ciepła filiżanka. Obok kartka: 'Mara kłamie'. Z drugiej strony pokręcona mapa z napisem: NIE JEDŹ NA PÓŁNOC.",
        bg: "pokoj.jpg"
    },
    // --- SCENA 11: 23:59 & PÓŁNOC ---
    {
        id: 23,
        speaker: "BOHATER",
        text: "Szukam informacji w sieci. Wpisuję: 'Eidolon gdzie jest?'. Wynik wyszukiwania to tylko jedno zdanie: 'Eidolon znajduje się tutaj.'",
        bg: "telefon.jpg",
        time: "23:59 | Poniedziałek"
    },
    {
        id: 24,
        speaker: "SYSTEM",
        text: "00:00. Zegar wybija północ. Tabliczka przed oknem zmienia się z 'ULICA 8' na 'ULICA 9'. W budynku naprzeciwko ktoś stoi w oknie i patrzy na ciebie.",
        bg: "black.jpg",
        time: "00:00 | Wtorek?"
    },
    {
        id: 25,
        speaker: "SYSTEM",
        text: "Dzwoni telefon. Połączenie przychodzące od: BOHATER (Twój własny numer).",
        bg: "telefon.jpg"
    },
    {
        id: 26,
        speaker: "GŁOS",
        text: "«Jeżeli mnie słyszysz... to znaczy, że znowu obudziłeś się za późno. Nie ufaj Marze. Nie ufaj mi.» (Połączenie przerwane)",
        bg: "telefon.jpg"
    },
    {
        id: 27,
        speaker: "WIADOMOŚĆ",
        text: "SMS od Mara: «Nie słuchaj tego.» Wszystkie światła w mieście gasną jednocześnie.",
        bg: "black.jpg"
    },
    {
        id: 28,
        speaker: "SYSTEM",
        text: "PIERWSZY DZIEŃ — KONIEC\n\nTo był poniedziałek. Tak przynajmniej twierdzisz.",
        bg: "black.jpg"
    }
];

let currentIndex = 0;

const speakerEl = document.getElementById('speaker-name');
const textEl = document.getElementById('dialogue-text');
const bgEl = document.getElementById('background');
const timeEl = document.getElementById('time-display');
const dialogueBox = document.getElementById('dialogue-box');
const choicesContainer = document.getElementById('choices-container');

function renderScene() {
    const currentScene = story[currentIndex];

    speakerEl.innerText = currentScene.speaker;
    textEl.innerText = currentScene.text;
    
    if(currentScene.bg) {
        bgEl.style.backgroundImage = `url('${currentScene.bg}')`;
    }
    if(currentScene.time) {
        timeEl.innerText = currentScene.time;
    }

    if (currentScene.choices) {
        dialogueBox.style.pointerEvents = "none";
        choicesContainer.innerHTML = "";
        choicesContainer.classList.remove('hidden');

        currentScene.choices.forEach(choice => {
            const button = document.createElement('div');
            button.className = 'choice-btn';
            button.innerText = choice.text;
            button.onclick = (e) => {
                e.stopPropagation();
                selectChoice(choice.nextId);
            };
            choicesContainer.appendChild(button);
        });
    } else {
        dialogueBox.style.pointerEvents = "auto";
        choicesContainer.classList.add('hidden');
    }
}

function selectChoice(nextId) {
    const foundIndex = story.findIndex(s => s.id === nextId);
    if (foundIndex !== -1) {
        currentIndex = foundIndex;
    } else {
        currentIndex++;
    }
    renderScene();
}

dialogueBox.addEventListener('click', () => {
    const currentScene = story[currentIndex];
    if (currentScene.choices) return;

    if (currentScene.nextId) {
        const foundIndex = story.findIndex(s => s.id === currentScene.nextId);
        currentIndex = (foundIndex !== -1) ? foundIndex : currentIndex + 1;
    } else {
        currentIndex++;
    }

    if (currentIndex < story.length) {
        renderScene();
    } else {
        textEl.innerText = "Koniec Rozdziału 1. Przejdź do Części II.";
    }
});

// Obsługa Fullscreen
const fsBtn = document.getElementById('fullscreen-btn');
fsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            fsBtn.innerText = "✕ Wyjdź";
        }).catch(err => {
            console.log("Błąd fullscreen: ", err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                fsBtn.innerText = "⛶ Fullscreen";
            });
        }
    }
});

// Start gry
renderScene();
        
