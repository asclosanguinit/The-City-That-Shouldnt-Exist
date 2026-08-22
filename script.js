// Silnik Gry - Eidolon Visual Novel

const story = [
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
        text: "Odwracam zdjęcie. Ręczny napis głosi: 'Nasz pierwszy poniedziałek'. Na zegarku dziewczyny ze zdjęcia widnieje godzina 06:42. Zegar na ścianie również pokazuje 06:42... i nie tyka.",
        bg: "zdjecie_zburzenie.jpg",
        nextId: 6
    },
    {
        id: 6,
        speaker: "BOHATER",
        text: "Wchodzę do łazienki i spoglądam w lustro. Patrzę na swoją twarz... Odbicie porusza ustami minimalnie za późno.",
        bg: "lustro.jpg"
    },
    {
        id: 7,
        speaker: "MARA",
        text: "(Telefon zaczyna dzwonić. Na ekranie: 12 NIEODEBRANYCH POŁĄCZEŃ - MARA)",
        bg: "telefon.jpg",
        choices: [
            { text: "Odbierz połączenie.", nextId: 8 },
            { text: "Odrzuć i przeczytaj wiadomość.", nextId: 9 }
        ]
    },
    {
        id: 8,
        speaker: "MARA",
        text: "«W końcu... To znaczy, że tym razem obudziłeś się wcześniej.» (Połączenie zostaje przerwane)",
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
    {
        id: 10,
        speaker: "BOHATER",
        text: "Podchodzę do drzwi wyjściowych. Na klamce wisi świeża kartka: NIE WYCHODŹ PRZED 08:00.",
        bg: "drzwi.jpg"
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
            button.onclick = () => selectChoice(choice.nextId);
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
        textEl.innerText = "Koniec wersji demonstracyjnej Rozdziału 1.";
    }
});

// Start gry
renderScene();
      
// Obsługa trybu pełnoekranowego
const fsBtn = document.getElementById('fullscreen-btn');

fsBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Zapobiega przypadkowemu kliknięciu w dialog
    
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            fsBtn.innerText = "✕ Wyjdź";
        }).catch(err => {
            console.log("Błąd włączania trybu pełnoekranowego: ", err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                fsBtn.innerText = "⛶ Pełny ekran";
            });
        }
    }
});
        
