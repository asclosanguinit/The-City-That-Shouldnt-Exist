// Silnik Gry - Eidolon Visual Novel: Wielojęzyczny (EN, PL, DE, ES)

// --- SYSTEM JĘZYKÓW ---
const langs = ['en', 'pl', 'de', 'es'];
const langLabels = ['Language: EN 🇬🇧', 'Język: PL 🇵🇱', 'Sprache: DE 🇩🇪', 'Idioma: ES 🇪🇸'];
let langIndex = 0;
let currentLang = 'en';

const uiTranslations = {
    title: {
        en: "THE CITY THAT SHOULDN'T EXIST",
        pl: "MIASTO, KTÓRE NIE POWINNO ISTNIEĆ",
        de: "DIE STADT, DIE NICHT EXISTIEREN SOLLTE",
        es: "LA CIUDAD QUE NO DEBERÍA EXISTIR"
    },
    playBtn: { en: "PLAY", pl: "GRAJ", de: "SPIELEN", es: "JUGAR" },
    author: { en: "Author", pl: "Autor", de: "Autor", es: "Autor" },
    prompt: { en: "Tap to continue ▼", pl: "Dotknij, aby kontynuować ▼", de: "Tippen zum Fortfahren ▼", es: "Toca para continuar ▼" },
    fsBtn: { en: "⛶ Fullscreen", pl: "⛶ Pełny ekran", de: "⛶ Vollbild", es: "⛶ Pantalla completa" },
    fsExit: { en: "✕ Exit", pl: "✕ Wyjdź", de: "✕ Schließen", es: "✕ Salir" },
    endText: {
        en: "End of Chapter 1. Proceed to Part II.",
        pl: "Koniec Rozdziału 1. Przejdź do Części II.",
        de: "Ende von Kapitel 1. Weiter zu Teil II.",
        es: "Fin del Capítulo 1. Continúa a la Parte II."
    }
};

// --- SCENARIUSZ ---
const story = [
    {
        id: 1,
        speaker: { en: "SYSTEM", pl: "SYSTEM", de: "SYSTEM", es: "SISTEMA" },
        text: {
            en: "Black screen. You hear rain hitting the windows. After a moment, an alarm clock sounds...",
            pl: "Czarny ekran. Słychać deszcz uderzający o szyby. Po chwili rozbrzmiewa sygnał budzika...",
            de: "Schwarzer Bildschirm. Man hört Regen gegen die Fenster schlagen. Nach einem Moment ertönt ein Wecker...",
            es: "Pantalla negra. Se oye la lluvia golpear las ventanas. Después de un momento, suena un despertador..."
        },
        bg: "black.jpg",
        time: { en: "06:42 | Monday", pl: "06:42 | Poniedziałek", de: "06:42 | Montag", es: "06:42 | Lunes" }
    },
    {
        id: 2,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I open my eyes. I'm lying in an unfamiliar bed. I see a thin crack on the ceiling.",
            pl: "Otwieram oczy. Leżę w nieznanym łóżku. Na suficie widzę pęknięcie w kształcie cienkiej linii.",
            de: "Ich öffne die Augen. Ich liege in einem fremden Bett. An der Decke sehe ich einen dünnen Riss.",
            es: "Abro los ojos. Estoy acostado en una cama desconocida. Veo una grieta fina en el techo."
        },
        bg: "pokoj.jpg",
        choices: [
            { 
                text: { en: "Get up immediately.", pl: "Wstań natychmiast.", de: "Sofort aufstehen.", es: "Levántate inmediatamente." }, 
                nextId: 3 
            },
            { 
                text: { en: "Try to remember where you are.", pl: "Spróbuj sobie przypomnieć, gdzie jesteś.", de: "Versuchen, sich zu erinnern, wo du bist.", es: "Intenta recordar dónde estás." }, 
                nextId: 3 
            },
            { 
                text: { en: "Stay in bed a little longer.", pl: "Zostań jeszcze chwilę w łóżku.", de: "Noch etwas im Bett bleiben.", es: "Quédate en la cama un poco más." }, 
                nextId: 3 
            }
        ]
    },
    {
        id: 3,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I sit up and look at my hands. No blood, no injuries. Yet... it feels like this body doesn't belong to me.",
            pl: "Siadam na łóżku i patrzę na dłonie. Brak krwi, brak obrażeń. A jednak... czuję, jakby to ciało nie należało do mnie.",
            de: "Ich setze mich auf und schaue auf meine Hände. Kein Blut, keine Verletzungen. Und doch... fühlt es sich an, als gehöre dieser Körper nicht mir.",
            es: "Me siento y miro mis manos. Sin sangre, sin heridas. Y sin embargo... siento que este cuerpo no me pertenece."
        },
        bg: "pokoj.jpg"
    },
    {
        id: 4,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I stand up and walk to the wall. Three photos are hanging there. One shows me in front of a cafe with a smiling girl.",
            pl: "Wstaję i podchodzę do ściany. Wiszą na niej trzy fotografie. Jedna przedstawia mnie przed kawiarnią obok uśmiechniętej dziewczyny.",
            de: "Ich stehe auf und gehe zur Wand. Dort hängen drei Fotos. Eines zeigt mich vor einem Café neben einem lächelnden Mädchen.",
            es: "Me levanto y camino hacia la pared. Hay tres fotos colgadas. Una me muestra frente a un café con una chica sonriente."
        },
        bg: "pokoj.jpg",
        choices: [
            { 
                text: { en: "Examine the photo closer.", pl: "Zbadaj zdjęcie dokładniej.", de: "Das Foto genauer untersuchen.", es: "Examina la foto más de cerca." }, 
                nextId: 5 
            },
            { 
                text: { en: "Put it down and go to the bathroom.", pl: "Odłóż je i przejdź do łazienki.", de: "Es weglegen und ins Bad gehen.", es: "Déjala y ve al baño." }, 
                nextId: 6 
            }
        ]
    },
    {
        id: 5,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I flip the photo. A handwritten note says: 'Our first Monday'. The girl's watch shows 06:42. The wall clock also shows 06:42... and it's not ticking.",
            pl: "Odwracam zdjęcie. Ręczny napis głosi: 'Nasz pierwszy poniedziałek'. Na zegarku dziewczyny ze zdjęcia widnieje 06:42. Zegar na ścianie również pokazuje 06:42... i nie tyka.",
            de: "Ich drehe das Foto um. Eine handschriftliche Notiz besagt: 'Unser erster Montag'. Die Uhr des Mädchens zeigt 06:42. Die Wanduhr zeigt auch 06:42... und sie tickt nicht.",
            es: "Le doy la vuelta a la foto. Una nota escrita a mano dice: 'Nuestro primer lunes'. El reloj de la chica muestra 06:42. El reloj de pared también muestra 06:42... y no hace tictac."
        },
        bg: "zdjecie_zburzenie.jpg",
        nextId: 6
    },
    {
        id: 6,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I walk into the bathroom and look in the mirror. 'Who exactly are you?'. My reflection moves its lips slightly too late... Fatigue?",
            pl: "Wchodzę do łazienki i spoglądam w lustro. 'Kim ty właściwie jesteś?'. Moje odbicie porusza ustami minimalnie za późno... Zmęczenie?",
            de: "Ich betrete das Bad und schaue in den Spiegel. 'Wer bist du eigentlich?'. Mein Spiegelbild bewegt die Lippen etwas zu spät... Müdigkeit?",
            es: "Entro al baño y me miro en el espejo. '¿Quién eres exactamente?'. Mi reflejo mueve los labios un poco tarde... ¿Fatiga?"
        },
        bg: "lustro.jpg"
    },
    {
        id: 7,
        speaker: { en: "SYSTEM", pl: "SYSTEM", de: "SYSTEM", es: "SISTEMA" },
        text: {
            en: "The phone on the table rings. The screen shows: 12 MISSED CALLS - MARA.",
            pl: "Na stole dzwoni telefon. Ekran pokazuje: 12 NIEODEBRANYCH POŁĄCZEŃ - MARA.",
            de: "Das Telefon auf dem Tisch klingelt. Der Bildschirm zeigt: 12 VERPASSTE ANRUFE - MARA.",
            es: "El teléfono en la mesa suena. La pantalla muestra: 12 LLAMADAS PERDIDAS - MARA."
        },
        bg: "telefon.jpg",
        choices: [
            { text: { en: "Answer the call.", pl: "Odbierz połączenie.", de: "Anruf annehmen.", es: "Contesta la llamada." }, nextId: 8 },
            { text: { en: "Ignore it.", pl: "Nie odbieraj.", de: "Ignorieren.", es: "Ignórala." }, nextId: 9 }
        ]
    },
    {
        id: 8,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "«Finally... Who are you? You don't remember? That's good. It means you woke up earlier this time.» (Call disconnected)",
            pl: "«W końcu... Kim jesteś? Nie pamiętasz? To dobrze. To znaczy, że tym razem obudziłeś się wcześniej.» (Połączenie rozłączone)",
            de: "«Endlich... Wer bist du? Du erinnerst dich nicht? Das ist gut. Das bedeutet, du bist dieses Mal früher aufgewacht.» (Anruf getrennt)",
            es: "«Finalmente... ¿Quién eres? ¿No te acuerdas? Eso es bueno. Significa que te despertaste más temprano esta vez.» (Llamada desconectada)"
        },
        bg: "telefon.jpg",
        nextId: 10
    },
    {
        id: 9,
        speaker: { en: "MESSAGE", pl: "WIADOMOŚĆ", de: "NACHRICHT", es: "MENSAJE" },
        text: {
            en: "«MARA: If you don't remember, do not leave the apartment. Seriously. Listen to me this time.»",
            pl: "«MARA: Jeżeli nie pamiętasz, nie wychodź z mieszkania. Naprawdę. Tym razem mnie posłuchaj.»",
            de: "«MARA: Wenn du dich nicht erinnerst, verlasse die Wohnung nicht. Im Ernst. Hör dieses Mal auf mich.»",
            es: "«MARA: Si no recuerdas, no salgas del apartamento. En serio. Escúchame esta vez.»"
        },
        bg: "telefon.jpg",
        nextId: 10
    },
    {
        id: 10,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I approach the exit. A note hangs on the handle: DO NOT LEAVE BEFORE 08:00. The watch says 07:18.",
            pl: "Podchodzę do wyjścia. Na klamce wisi kartka: NIE WYCHODŹ PRZED 08:00. Na zegarku 07:18.",
            de: "Ich gehe zum Ausgang. Ein Zettel hängt am Griff: NICHT VOR 08:00 VERLASSEN. Die Uhr zeigt 07:18.",
            es: "Me acerco a la salida. Una nota cuelga de la manija: NO SALIR ANTES DE LAS 08:00. El reloj dice 07:18."
        },
        bg: "drzwi.jpg",
        choices: [
            { text: { en: "Listen to the warning.", pl: "Posłuchaj ostrzeżenia.", de: "Auf die Warnung hören.", es: "Escucha la advertencia." }, nextId: 11 },
            { text: { en: "Leave immediately.", pl: "Wyjdź natychmiast.", de: "Sofort verlassen.", es: "Sal de inmediato." }, nextId: 11 }
        ]
    },
    {
        id: 11,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I open the door. The city is massive. Skyscrapers lost in fog, trams running. Everything looks normal... too normal.",
            pl: "Otwieram drzwi. Miasto jest ogromne. Wieżowce toną w mgle, tramwaje kursują. Wszystko wygląda normalnie... aż za bardzo.",
            de: "Ich öffne die Tür. Die Stadt ist riesig. Wolkenkratzer im Nebel, Straßenbahnen fahren. Alles sieht normal aus... zu normal.",
            es: "Abro la puerta. La ciudad es masiva. Rascacielos perdidos en la niebla, tranvías en marcha. Todo parece normal... demasiado normal."
        },
        bg: "zdjecie_zburzenie.jpg",
        time: { en: "07:55 | Street 8", pl: "07:55 | Ulica 8", de: "07:55 | Straße 8", es: "07:55 | Calle 8" }
    },
    {
        id: 12,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "«You look like you're seeing it for the first time.» I turn around. It's the girl from the photo. Mara.",
            pl: "«Wyglądasz, jakbyś zobaczył je pierwszy raz.» Odwracam się. To dziewczyna ze zdjęcia. Mara.",
            de: "«Du siehst aus, als würdest du es zum ersten Mal sehen.» Ich drehe mich um. Es ist das Mädchen vom Foto. Mara.",
            es: "«Pareces como si lo estuvieras viendo por primera vez.» Me doy la vuelta. Es la chica de la foto. Mara."
        },
        bg: "pokoj.jpg"
    },
    {
        id: 13,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "«Do I know you? It depends... on whether today is truly the first day.»",
            pl: "«Znam cię? Zależy... od tego, czy dzisiaj jest naprawdę pierwszy dzień.»",
            de: "«Kenne ich dich? Das hängt davon ab... ob heute wirklich der erste Tag ist.»",
            es: "«¿Te conozco? Depende... de si hoy es realmente el primer día.»"
        },
        bg: "pokoj.jpg"
    },
    {
        id: 14,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "We sit in a cafe. Mara hands me a cup: «You drink it black. You always did. We met 3 years ago. We last spoke yesterday.»",
            pl: "Siadamy w kawiarni. Mara podaje mi filiżankę: «Pijesz czarną. Zawsze piłeś czarną. Poznaliśmy się 3 lata temu. Ostatnio rozmawialiśmy wczoraj.»",
            de: "Wir sitzen in einem Café. Mara reicht mir eine Tasse: «Du trinkst ihn schwarz. Hast du immer. Wir haben uns vor 3 Jahren getroffen. Wir haben gestern zuletzt gesprochen.»",
            es: "Nos sentamos en un café. Mara me pasa una taza: «Lo bebes solo. Siempre lo hiciste. Nos conocimos hace 3 años. Hablamos por última vez ayer.»"
        },
        bg: "pokoj.jpg"
    },
    {
        id: 15,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I take a sip. «...I don't like it. I don't like black coffee.» Mara freezes: «You've never said that before...»",
            pl: "Biorę łyk. «...Nie lubię. Nie lubię czarnej kawy.» Mara zamiera w bezruchu: «Nigdy wcześniej tego nie powiedziałeś...»",
            de: "Ich nehme einen Schluck. «...Ich mag es nicht. Ich mag keinen schwarzen Kaffee.» Mara erstarrt: «Das hast du noch nie zuvor gesagt...»",
            es: "Tomo un sorbo. «...No me gusta. No me gusta el café solo.» Mara se congela: «Nunca antes habías dicho eso...»"
        },
        bg: "pokoj.jpg"
    },
    {
        id: 16,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "We step outside. The clock on the building says 08:03. Mara whispers: «Don't look. Or it will be gone.» I look away, then back.",
            pl: "Wychodzimy. Zegar na budynku pokazuje 08:03. Mara szepcze: «Nie patrz. Bo go nie będzie.» Odwracam wzrok i patrzę znowu.",
            de: "Wir gehen raus. Die Uhr am Gebäude zeigt 08:03. Mara flüstert: «Nicht hinsehen. Sonst ist sie weg.» Ich schaue weg, dann wieder hin.",
            es: "Salimos. El reloj en el edificio dice 08:03. Mara susurra: «No mires. O desaparecerá.» Miro hacia otro lado, y luego de vuelta."
        },
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 17,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "The clock is still there, now showing 08:04. Mara turns pale with terror: «No... This shouldn't have happened.»",
            pl: "Zegar nadal tam jest i pokazuje 08:04. Mara błętnieje z przerażenia: «Nie... To nie powinno się wydarzyć.»",
            de: "Die Uhr ist noch da und zeigt jetzt 08:04. Mara wird blass vor Schrecken: «Nein... Das hätte nicht passieren dürfen.»",
            es: "El reloj sigue ahí, ahora mostrando 08:04. Mara palidece de terror: «No... Esto no debería haber pasado.»"
        },
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 18,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "We stand by Street 17. Mara stops me: «Here you will see something you shouldn't. Your previous day.»",
            pl: "Stajemy przy Ulicy 17. Mara zatrzymuje mnie: «Tutaj zobaczysz coś, czego nie powinieneś. Swój poprzedni dzień.»",
            de: "Wir stehen an Straße 17. Mara hält mich auf: «Hier wirst du etwas sehen, das du nicht sehen solltest. Deinen vorherigen Tag.»",
            es: "Nos paramos junto a la Calle 17. Mara me detiene: «Aquí verás algo que no deberías. Tu día anterior.»"
        },
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 19,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "At the end of the street stands a man in my jacket. It's me. I run after him, even though Mara screams 'NO!'. He vanishes around the corner.",
            pl: "Na końcu ulicy stoi mężczyzna w mojej kurtce. To ja sam. Biegnę za nim, mimo że Mara krzyczy 'NIE!'. Znika za rogiem.",
            de: "Am Ende der Straße steht ein Mann in meiner Jacke. Ich bin es. Ich renne ihm nach, obwohl Mara 'NEIN!' schreit. Er verschwindet um die Ecke.",
            es: "Al final de la calle hay un hombre con mi chaqueta. Soy yo. Corro tras él, aunque Mara grita '¡NO!'. Desaparece al doblar la esquina."
        },
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 20,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "A note lies on the sidewalk: 'Don't trust Mara'. Mara looks at it quietly: «It's starting earlier than last time...»",
            pl: "Na chodniku leży kartka: 'Nie ufaj Marze'. Mara patrzy na nią cicho: «To zaczyna się wcześniej niż ostatnio...»",
            de: "Ein Zettel liegt auf dem Bürgersteig: 'Vertraue Mara nicht'. Mara schaut ihn still an: «Es fängt früher an als letztes Mal...»",
            es: "Una nota yace en la acera: 'No confíes en Mara'. Mara la mira en silencio: «Está empezando más temprano que la última vez...»"
        },
        bg: "zdjecie_zburzenie.jpg"
    },
    {
        id: 21,
        speaker: { en: "MARA", pl: "MARA", de: "MARA", es: "MARA" },
        text: {
            en: "She walks me to my door: «Don't go out after dark today. At midnight, the street numbering changes.»",
            pl: "Odprowadza mnie pod drzwi: «Nie wychodź dziś po zmroku. O północy ulica zmienia numerację.»",
            de: "Sie begleitet mich zur Tür: «Geh heute nach Einbruch der Dunkelheit nicht raus. Um Mitternacht ändert sich die Straßennummerierung.»",
            es: "Me acompaña a mi puerta: «No salgas después del anochecer hoy. A medianoche, la numeración de las calles cambia.»"
        },
        bg: "drzwi.jpg"
    },
    {
        id: 22,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I enter the kitchen. A second, warm cup sits on the table. Beside it, a note: 'Mara lies'. On the back, a twisted map: DO NOT GO NORTH.",
            pl: "Wchodzę do kuchni. Na stole stoi druga, ciepła filiżanka. Obok kartka: 'Mara kłamie'. Z drugiej strony pokręcona mapa z napisem: NIE JEDŹ NA PÓŁNOC.",
            de: "Ich betrete die Küche. Eine zweite, warme Tasse steht auf dem Tisch. Daneben ein Zettel: 'Mara lügt'. Auf der Rückseite eine verdrehte Karte: NICHT NACH NORDEN GEHEN.",
            es: "Entro a la cocina. Una segunda taza tibia descansa sobre la mesa. Al lado, una nota: 'Mara miente'. En el reverso, un mapa retorcido: NO VAYAS AL NORTE."
        },
        bg: "pokoj.jpg"
    },
    {
        id: 23,
        speaker: { en: "HERO", pl: "BOHATER", de: "HELD", es: "HÉROE" },
        text: {
            en: "I search for info online. I type: 'Eidolon where is it?'. The search result is just one sentence: 'Eidolon is right here.'",
            pl: "Szukam informacji w sieci. Wpisuję: 'Eidolon gdzie jest?'. Wynik wyszukiwania to tylko jedno zdanie: 'Eidolon znajduje się tutaj.'",
            de: "Ich suche online nach Infos. Ich tippe: 'Eidolon wo ist es?'. Das Suchergebnis ist nur ein Satz: 'Eidolon ist genau hier.'",
            es: "Busco información en línea. Escribo: 'Eidolon ¿dónde está?'. El resultado de búsqueda es solo una oración: 'Eidolon está justo aquí.'"
        },
        bg: "telefon.jpg",
        time: { en: "23:59 | Monday", pl: "23:59 | Poniedziałek", de: "23:59 | Montag", es: "23:59 | Lunes" }
    },
    {
        id: 24,
        speaker: { en: "SYSTEM", pl: "SYSTEM", de: "SYSTEM", es: "SISTEMA" },
        text: {
            en: "00:00. The clock strikes midnight. The sign outside changes from 'STREET 8' to 'STREET 9'. In the building opposite, someone is standing in the window, watching you.",
            pl: "00:00. Zegar wybija północ. Tabliczka przed oknem zmienia się z 'ULICA 8' na 'ULICA 9'. W budynku naprzeciwko ktoś stoi w oknie i patrzy na ciebie.",
            es: "00:00. El reloj da la medianoche. El letrero afuera cambia de 'CALLE 8' a 'CALLE 9'. En el edificio de enfrente, alguien está de pie en la ventana, mirándote."
        },
        bg: "black.jpg",
        time: { en: "00:00 | Tuesday?", pl: "00:00 | Wtorek?", de: "00:00 | Dienstag?", es: "00:00 | ¿Martes?" }
    },
    {
        id: 25,
        speaker: { en: "SYSTEM", pl: "SYSTEM", de: "SYSTEM", es: "SISTEMA" },
        text: {
            en: "The phone rings. Incoming call from: HERO (Your own number).",
            pl: "Dzwoni telefon. Połączenie przychodzące od: BOHATER (Twój własny numer).",
            de: "Das Telefon klingelt. Eingehender Anruf von: HELD (Deine eigene Nummer).",
            es: "El teléfono suena. Llamada entrante de: HÉROE (Tu propio número)."
        },
        bg: "telefon.jpg"
    },
    {
        id: 26,
        speaker: { en: "VOICE", pl: "GŁOS", de: "STIMME", es: "VOZ" },
        text: {
            en: "«If you can hear me... it means you woke up too late again. Don't trust Mara. Don't trust me.» (Call disconnected)",
            pl: "«Jeżeli mnie słyszysz... to znaczy, że znowu obudziłeś się za późno. Nie ufaj Marze. Nie ufaj mi.» (Połączenie przerwane)",
            de: "«Wenn du mich hören kannst... bedeutet das, du bist wieder zu spät aufgewacht. Vertraue Mara nicht. Vertraue mir nicht.» (Anruf getrennt)",
            es: "«Si puedes oírme... significa que te despertaste demasiado tarde otra vez. No confíes en Mara. No confíes en mí.» (Llamada desconectada)"
        },
        bg: "telefon.jpg"
    },
    {
        id: 27,
        speaker: { en: "MESSAGE", pl: "WIADOMOŚĆ", de: "NACHRICHT", es: "MENSAJE" },
        text: {
            en: "SMS from Mara: «Don't listen to that.» All the lights in the city go out simultaneously.",
            pl: "SMS od Mara: «Nie słuchaj tego.» Wszystkie światła w mieście gasną jednocześnie.",
            de: "SMS von Mara: «Hör nicht darauf.» Alle Lichter in der Stadt gehen gleichzeitig aus.",
            es: "SMS de Mara: «No escuches eso.» Todas las luces de la ciudad se apagan simultáneamente."
        },
        bg: "black.jpg"
    },
    {
        id: 28,
        speaker: { en: "SYSTEM", pl: "SYSTEM", de: "SYSTEM", es: "SISTEMA" },
        text: {
            en: "FIRST DAY — END\n\nIt was Monday. At least, that's what you claim.",
            pl: "PIERWSZY DZIEŃ — KONIEC\n\nTo był poniedziałek. Tak przynajmniej twierdzisz.",
            de: "ERSTER TAG — ENDE\n\nEs war Montag. Zumindest behauptest du das.",
            es: "PRIMER DÍA — FIN\n\nEra lunes. Al menos, eso es lo que afirmas."
        },
        bg: "black.jpg"
    }
];

// --- LOGIKA GRY ---
let currentIndex = 0;

const speakerEl = document.getElementById('speaker-name');
const textEl = document.getElementById('dialogue-text');
const bgEl = document.getElementById('background');
const timeEl = document.getElementById('time-display');
const dialogueBox = document.getElementById('dialogue-box');
const choicesContainer = document.getElementById('choices-container');
const clickPrompt = document.getElementById('click-prompt');

const mainMenu = document.getElementById('main-menu');
const playBtn = document.getElementById('play-btn');
const langBtn = document.getElementById('lang-btn');
const menuTitle = document.getElementById('menu-title');
const authorCredit = document.getElementById('author-credit');
const fsBtn = document.getElementById('fullscreen-btn');

// Zmiana języka
function updateUI() {
    menuTitle.innerText = uiTranslations.title[currentLang];
    playBtn.innerText = uiTranslations.playBtn[currentLang];
    authorCredit.innerText = `${uiTranslations.author[currentLang]}: AscloSanguinit`;
    clickPrompt.innerText = uiTranslations.prompt[currentLang];
    
    if (!document.fullscreenElement) {
        fsBtn.innerText = uiTranslations.fsBtn[currentLang];
    } else {
        fsBtn.innerText = uiTranslations.fsExit[currentLang];
    }

    if (mainMenu.style.opacity === '0') {
        renderScene(); // Odśwież tekst sceny jeśli gra już trwa
    }
}

langBtn.addEventListener('click', () => {
    langIndex = (langIndex + 1) % langs.length;
    currentLang = langs[langIndex];
    langBtn.innerText = langLabels[langIndex];
    updateUI();
});

// Start Gry
playBtn.addEventListener('click', () => {
    mainMenu.style.opacity = '0';
    mainMenu.style.visibility = 'hidden';
    renderScene();
});

function renderScene() {
    const currentScene = story[currentIndex];

    // Pobieranie tekstu w aktualnym języku
    speakerEl.innerText = currentScene.speaker[currentLang];
    textEl.innerText = currentScene.text[currentLang];
    
    if(currentScene.bg) {
        bgEl.style.backgroundImage = `url('${currentScene.bg}')`;
    }
    
    if(currentScene.time) {
        timeEl.innerText = currentScene.time[currentLang] || currentScene.time.en; // fallback do EN jak brak
    } else {
        timeEl.innerText = "";
    }

    if (currentScene.choices) {
        dialogueBox.style.pointerEvents = "none";
        choicesContainer.innerHTML = "";
        choicesContainer.classList.remove('hidden');

        currentScene.choices.forEach(choice => {
            const button = document.createElement('div');
            button.className = 'choice-btn';
            button.innerText = choice.text[currentLang];
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
        textEl.innerText = uiTranslations.endText[currentLang];
    }
});

// Obsługa Fullscreen (ze wsparciem dla tłumaczeń)
fsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            fsBtn.innerText = uiTranslations.fsExit[currentLang];
        }).catch(err => {
            console.log("Błąd fullscreen: ", err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                fsBtn.innerText = uiTranslations.fsBtn[currentLang];
            });
        }
    }
});

// Inicjalizacja domyślnego UI (Angielski)
updateUI();
