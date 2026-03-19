/* =========================================
   1. DATI DELLE OPERE (Array Completo)
   ========================================= */

// Opere per pagina 1 (già esistenti)
const operePagina1 = [
    // ... (tutto il vecchio array opere qui, invariato)
    { titolo: "Rappresentare il mondo: mappe e cartografia nel Medioevo", img: "assets/pannelli/mappamondot.o..jpg", desc: ` Nel Medioevo la cartografia non è un sapere unitario, ma un insieme di forme diverse di rappresentazione dello spazio, ciascuna con funzioni specifiche. Accanto ai mappamondi simbolici convivono infatti carte pragmatiche, pensate per la navigazione, e rappresentazioni più complesse capaci di integrare coste, territori interni e assetti politici.<br>Tra i modelli più diffusi si trova il mappamondo di tipo T O, in cui il mondo abitato appare come un disco circondato dall’oceano e i tre continenti sono separati dal Mediterraneo e dai grandi fiumi orientali. Non si tratta di una carta costruita per orientarsi nello spazio, ma di uno schema che rende visibile l’ordine generale del mondo e ne fissa nella memoria la struttura.<br>Accanto a questa tradizione si sviluppano tra Duecento e Trecento le carte nautiche, strumenti destinati alla navigazione commerciale. In esse l’attenzione si concentra sulla precisione delle coste, dei porti, delle rotte e dei pericoli del mare. Il Mediterraneo vi appare come uno spazio fitto di approdi e di collegamenti, intensamente percorso da uomini, merci e informazioni.<br>Le mappe medievali non servono dunque soltanto a localizzare i luoghi. Servono anche a organizzare il sapere, a dare forma al mondo e a collocare l’esperienza umana entro una visione più ampia dello spazio e della storia.`, raccordo: `In questo orizzonte culturale la mappa non è solo uno strumento tecnico. Può diventare anche un mezzo per viaggiare con l’intelligenza, con la memoria e con i libri.`, fonte: "Fonte: Etymologiae 14.3 De Asia - Wikimedia Commons" },
    { titolo: "Viaggiare con i libri e con le carte: Petrarca e l’Itinerarium", img: "assets/pannelli/pietrovesconte.jpg", desc: ` L’<em>Itinerarium ad sepulcrum Domini nostri Yesu Cristi</em> di Francesco Petrarca si presenta come una guida per un pellegrinaggio in Terra Santa. Ma, a differenza di molti testi medievali di viaggio, non nasce da un’esperienza realmente compiuta. Petrarca aveva progettato quel pellegrinaggio, senza mai realizzarlo. Il suo testo costruisce quindi un viaggio ideale, affidato allo studio, alla memoria letteraria e alla conoscenza geografica.<br>Indirizzato all’amico Giovanni Mandelli, che l’autore immagina in cammino verso Gerusalemme, l’<em>Itinerarium</em> accompagna il viaggiatore lungo il percorso e trasforma il pellegrinaggio in un esercizio insieme intellettuale e spirituale. L’opera si fonda infatti su tre elementi principali: l’esperienza diretta di alcuni luoghi visitati dall’autore, il ricorso a un vastissimo patrimonio di fonti classiche e cristiane, e l’uso delle carte geografiche.<br>Le testimonianze conservate nei manoscritti appartenuti a Petrarca mostrano chiaramente l’importanza della cartografia nel suo lavoro. Le mappe aiutano a confrontare i nomi dei luoghi, a orientarsi tra le fonti e a immaginare percorsi lontani. In una celebre lettera del 1368 Petrarca afferma di poter viaggiare “con una brevissima carta geografica, con i libri e con l’ingegno”. Il viaggio può dunque compiersi anche senza muovere il corpo, attraverso una geografia costruita nella mente.`, raccordo: `Nel Trecento, dunque, il viaggio non coincide necessariamente con lo spostamento fisico. Può diventare una forma di conoscenza, una struttura del racconto, un dispositivo capace di collegare esperienza, memoria e visione.`, fonte: "Fonte: World map - Wikimedia Commons" },
    { titolo: "Dante: il viaggio come racconto, esperienza e destino umano", img: "assets/pannelli/framauro.jpg", desc: ` Nella <em>Commedia</em> il viaggio diventa la struttura portante del poema. Dante attraversa Inferno, Purgatorio e Paradiso, e l’intero racconto si organizza intorno a questo movimento. Ma il viaggio dantesco non si esaurisce nella dimensione narrativa: è insieme esperienza concreta, figura morale e percorso di conoscenza.<br>Già nel primo verso, “Nel mezzo del cammin di nostra vita”, il cammino si impone come immagine fondamentale dell’esistenza umana. La vita viene pensata come un percorso, con una direzione, una crisi, ostacoli e una meta. Accanto a questa metafora iniziale, però, la <em>Commedia</em> costruisce anche un viaggio presentato come reale nella finzione del poema: Dante insiste infatti sul fatto di compierlo con il proprio corpo, durante la settimana di Pasqua del 1300.<br>Su questa base si innestano altri livelli di significato. Il viaggio è apprendistato alla verità, progresso morale e spirituale, anticipazione del destino delle anime dopo la morte. È anche il percorso attraverso cui Dante costruisce la propria voce poetica e profetica. Il lessico odeporico della <em>Commedia</em> tiene insieme tutti questi piani, facendo del viaggio la forma narrativa capace di unire esperienza individuale e destino universale.`, raccordo: "Ma il viaggio dantesco non si svolge in uno spazio astratto. Attraversa invece un universo rigorosamente ordinato, fondato su una precisa geografia terrestre e cosmica.", fonte: "Fra Mauro map - Wikimedia Commons" },
    { titolo: "La geografia della Commedia: dal mondo terreno all’ordine del cosmo", img: "assets/pannelli/dante.jpg", desc: `Lo spazio della <em>Commedia</em> è costruito con straordinaria coerenza. Il viaggio di Dante attraversa l’intero universo medievale: dalla voragine infernale che si apre sotto Gerusalemme fino alla montagna del Purgatorio nell’emisfero opposto, per poi salire attraverso le sfere celesti fino all’Empireo. Si tratta di un cosmo ordinato, materiale e intelligibile, che riflette la visione aristotelica e cristiana dell’universo.<br>L’aldilà dantesco è dunque inseparabile dalla geografia terrestre. Gerusalemme occupa il centro simbolico del mondo, l’Inferno si apre sotto la superficie della terra, il Purgatorio sorge al suo opposto. Anche quando il poema sembra allontanarsi dal mondo dei vivi, continua a misurarsi con esso. La terra riappare nella selva iniziale e poi, in forma altissima e memorabile, nella visione del globo dal cielo delle stelle fisse, dove il mondo umano si riduce a una piccola “aiuola”.<br>La <em>Commedia</em> mostra inoltre una sensibilità geografica e cartografica molto precisa. Fiumi, coste, città, montagne e regioni sono evocati con rigore topografico, e in alcuni passi la scrittura sembra funzionare come una vera mappa verbale. La geografia non è quindi una semplice cornice del racconto, ma uno dei suoi principi costruttivi: uno strumento di verità, capace di dare forma visibile all’ordine morale e cosmico del poema.`, raccordo: "Dal mondo terreno all’ordine del cosmo.", fonte: "The Divine Comedy - Wikimedia Commons" },
    {
        titolo: "La geografia della Commedia",
        img: "assets/Decamerone.jpeg",
        desc: `Anche nei canti successivi la geografia dantesca si fa simbolo e realtà insieme. Fiumi, montagne, città e regioni sono evocati con precisione, ma assumono anche un valore allegorico e universale. La narrazione si muove tra luoghi concreti e spazi dell’immaginazione, offrendo al lettore una mappa dell’anima e del creato. <br>La Commedia diventa così un viaggio che attraversa non solo l’aldilà, ma anche la conoscenza, la memoria e la speranza umana.`,
        raccordo: "Una mappa dell'anima e del creato. Ogni luogo è anche un passaggio interiore.",
        fonte: "Fonte: British Library"
    },
    {
        titolo: "L'espansione dei confini",
        img: "assets/Decamerone.jpeg",
        desc: `Nel passaggio dal Medioevo all’Umanesimo, le scoperte geografiche e le nuove rotte marittime trasformano la percezione del mondo. L’orizzonte si allarga, le mappe si arricchiscono di dettagli e di terre sconosciute. <br>Questa espansione non è solo fisica, ma anche culturale: il viaggio diventa occasione di incontro, di scambio e di crescita collettiva. Le colonne d’Ercole non segnano più un limite invalicabile, ma una soglia verso l’ignoto e il possibile.`,
        raccordo: "Oltre le colonne d'Ercole. L’avventura della conoscenza continua.",
        fonte: "Fonte: British Library"
    },
    {
        titolo: "La narrazione del mare",
        img: "assets/Decamerone.jpeg",
        desc: `Il mare, nella letteratura e nell’immaginario medievale, è simbolo di cambiamento, di pericolo e di speranza. Le onde separano e uniscono, portano naufragi e approdi. <br>Attraverso le storie di viaggiatori, mercanti e pellegrini, il mare diventa teatro di incontri tra culture diverse, metafora della vita stessa e delle sue trasformazioni. Ogni viaggio sul mare è anche un viaggio dentro di sé, alla ricerca di nuovi mondi e di nuove identità.`,
        raccordo: "Acque che uniscono culture diverse. Il viaggio non finisce mai.",
        fonte: "Fonte: British Library"
    },
];

// Opere per pagina 2 (placeholder a tema "Il mare di Boccaccio")
const operePagina2 = [
    { titolo: "Navigare tra novelle e onde", img: "assets/Decamerone.jpeg", desc: "Il mare come spazio di avventura e narrazione nel Decameron.", raccordo: "Boccaccio e il viaggio per mare.", fonte: "Fonte: Decameron" },
    { titolo: "Mercanti, porti e incontri", img: "assets/Decamerone.jpeg", desc: "Il Mediterraneo come crocevia di storie e commerci.", raccordo: "Racconti di scambi e incontri sulle rotte del mare.", fonte: "Fonte: Decameron" },
    { titolo: "Tempeste e approdi", img: "assets/Decamerone.jpeg", desc: "Le tempeste come metafora di cambiamento e destino.", raccordo: "Il mare che separa e unisce.", fonte: "Fonte: Decameron" },
    { titolo: "Viaggi interiori e reali", img: "assets/Decamerone.jpeg", desc: "Il viaggio per mare come percorso di crescita.", raccordo: "Il mare dentro e fuori di noi.", fonte: "Fonte: Decameron" },
    { titolo: "L’isola e la salvezza", img: "assets/Decamerone.jpeg", desc: "L’approdo come rinascita e speranza.", raccordo: "Nuove terre, nuove vite.", fonte: "Fonte: Decameron" },
];

// Opere per pagina 3 (placeholder a tema "Il progetto MARIS")
const operePagina3 = [
    { titolo: "Il progetto MARIS: il Mediterraneo attraverso gli occhi di Boccaccio", img: "assets/Decamerone.jpeg", desc: "MARIS (Mapping And Reading the Inner Sea) esplora come il \"Mare Interno\" veniva percepito e descritto alla fine del Trecento, analizzando le opere latine di Giovanni Boccaccio in costante dialogo con la cartografia medievale. Il progetto mira a mappare questa visione per offrire una nuova comprensione dell'identità europea legata al mare.", raccordo: "Un progetto per navigare la conoscenza.", fonte: "Fonte: MARIS" },
    { titolo: "Metodologia Interdisciplinare: l'unione tra letteratura e geoinformatica", img: "assets/Decamerone.jpeg", desc: "Il progetto utilizza algoritmi avanzati per estrarre riferimenti geografici dai testi latini di Boccaccio.Questi dati vengono poi confrontati con gli strumenti cartografici del XIV secolo, come le mappe T-O e le carte nautiche (portolani), per ricostruire la \"mappa mentale\" dell'autore", raccordo: "Dati, mappe, storie.", fonte: "Fonte: MARIS" },
    { titolo: "MedSea & Navigating Boccaccio: risorse innovative per la ricerca e la didattica", img: "assets/pannelli/maris.png", desc: "Il progetto ha dato vita a due piattaforme principali: MedSea, un database ricercabile pensato per gli studiosi, e Navigating Boccaccio, una mappa medievale interattiva progettata per studenti e insegnanti. Questi strumenti permettono di visualizzare concretamente i viaggi e le conoscenze geografiche del Trecento", raccordo: "Un mare di relazioni.", fonte: "Fonte: MARIS" },
    { titolo: "La Nuova \"Seaness\": connettere le generazioni al Mare Interno", img: "assets/Decamerone.jpeg", desc: "MARIS promuove il concetto di \"Seaness\", ovvero l'intimo legame tra l'Europa e il Mediterraneo. Attraverso workshop nelle scuole e collaborazioni con musei della scienza, il progetto educa le nuove generazioni a una percezione critica e complessa delle interazioni umane nel mare.", raccordo: "Navigare tra saperi.", fonte: "Fonte: MARIS" },
    { titolo: "Istituzioni e Team: un'eccellenza accademica internazionale", img: "assets/Decamerone.jpeg", desc: "Il progetto è ospitato dalla Palacký University Olomouc (UPOL) nella Repubblica Ceca.La ricerca è guidata dalla dott.ssa Valentina Rovere, con la supervisione del Prof. Jiří Špička (esperto di letteratura italiana) e del Prof. Vít Voženílek (esperto di geoinformatica). Programma di ricerca e innovazione Horizon Europe, nell'ambito delle azioni Marie Skłodowska-Curie", raccordo: "Condividere la conoscenza.", fonte: "Fonte: MARIS" },
];

// Scegli l'array giusto in base alla pagina
let opere = operePagina1;
if (document.body && document.body.classList.contains('pagina2')) {
    opere = operePagina2;
} else if (document.body && document.body.classList.contains('pagina3')) {
    opere = operePagina3;
}

let currentIndex = 0;


document.addEventListener('DOMContentLoaded', function() {
    const oceanAudio = document.getElementById('ocean-audio');
    // Carica l'audio solo al primo click su un qualsiasi punto della pagina
    if (oceanAudio) {
        const enableAudio = () => {
            oceanAudio.load();
            document.removeEventListener('click', enableAudio);
        };
        document.addEventListener('click', enableAudio);
    }
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    let audioEnabled = false;


    function updateAudioIcon() {
        if (!audioIcon) return;
        if (audioEnabled) {
            audioIcon.textContent = '🔇'; // Audio acceso, mostra icona barrata per "stacca"
        } else {
            audioIcon.textContent = '🔊'; // Audio spento, mostra icona normale
        }
    }

    function toggleAudio() {
        if (!oceanAudio) return;
        if (audioEnabled) {
            oceanAudio.pause();
            oceanAudio.currentTime = 0;
            audioEnabled = false;
            updateAudioIcon();
        } else {
            const playPromise = oceanAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioEnabled = true;
                    updateAudioIcon();
                }).catch(err => {
                    // Autoplay policy: l'utente deve interagire
                    audioEnabled = false;
                    updateAudioIcon();
                    alert('Impossibile avviare l\'audio: interagisci con la pagina.');
                });
            } else {
                // Fallback: se playPromise non è una promise
                audioEnabled = true;
                updateAudioIcon();
            }
        }
    }

    if (audioToggle && oceanAudio) {
        audioToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleAudio();
        });
        updateAudioIcon();
    }
});
/* =========================================
   2. LOGICA QUADRI (Flip e Apertura Modale)
   ========================================= */
document.querySelectorAll('.painting-frame').forEach(frame => {
    // Gestione FLIP
    const flipBtn = frame.querySelector('.flip-btn');
    if (flipBtn) {
        flipBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di aprire la modale se clicchi sulla freccia flip
            frame.classList.toggle('flipped');
        });
    }

    // Reset Flip quando esci col mouse
    frame.addEventListener('mouseleave', () => {
        frame.classList.remove('flipped');
    });

// Apertura Modale (sia fronte che retro, ma non sulla flip-btn)
frame.addEventListener('click', (e) => {
    if (e.target.classList.contains('flip-btn')) return;
    const idx = frame.getAttribute('data-index');
    openModal(idx);
});
});

/* =========================================
   3. GESTIONE MODALE
   ========================================= */
function openModal(index) {
    document.getElementById('painting-modal').style.display = 'flex';
    showPainting(index);
}

function closeModal() {
    document.getElementById('painting-modal').style.display = 'none';
}

function showPainting(index) {
    currentIndex = parseInt(index);
    const content = document.getElementById('modal-dynamic-content');
    
    // Aggiorna miniature attive
    document.querySelectorAll('.thumb').forEach((t, i) => {
        t.classList.toggle('active', i === currentIndex);
    });

    // Inietta il contenuto dell'opera corrente con nuova struttura
content.innerHTML = `
    <div class="painting-detail">
        <div class="img-container">
            <img src="${opere[currentIndex].img}" class="modal-img">
            <div class="modal-credit-vertical">${opere[currentIndex].fonte}</div>
        </div>
        <div class="modal-text-area">
            <div class="modal-title-global">${opere[currentIndex].titolo}</div>
            <h2>${opere[currentIndex].titolo}</h2>
            <p>${opere[currentIndex].desc}</p>
        </div>
    </div>
    <div class="raccordo-cartiglio" onclick="startCartiglio(this)">
        &rarr;
        <div class="raccordo-testo" data-fulltext="${opere[currentIndex].raccordo}"></div>
    </div>
`;
}

/* =========================================
   4. ANIMAZIONE CARTIGLIO E NAVIGAZIONE AUTO
   ========================================= */
function startCartiglio(element) {
    if (element.classList.contains('animating')) return;
    element.classList.add('animating');
    
    const textBox = element.querySelector('.raccordo-testo');
    const fullText = textBox.getAttribute('data-fulltext');
    const words = fullText.split(' ');
    textBox.innerHTML = '';
    textBox.style.display = 'block';

    let i = 0;
    const interval = setInterval(() => {
        if (i < words.length) {
            const span = document.createElement('span');
            span.className = 'fade-in-word';
            span.textContent = words[i] + '\u00A0'; // spazio non-interrompibile
            textBox.appendChild(span);
            setTimeout(() => span.classList.add('visible'), 10);
            i++;
        } else {
            clearInterval(interval);
            // Salto automatico dopo la lettura
            setTimeout(() => {
                if (currentIndex < opere.length - 1) {
                    showPainting(currentIndex + 1);
                } else {
                    closeModal();
                }
            }, 1800);
        }
    }, 150);
}

// Click sulle miniature della barra superiore
document.querySelectorAll('.thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        showPainting(i);
    });
});

// Porta che si apre per accedere alla pagina nascosta
function openDoorAndRedirect(url) {
  const door = document.querySelector('.door');
  door.classList.add('open'); // Avvia l'animazione

  // Aspetta 1.5 secondi (la durata del CSS transition) prima di cambiare pagina
  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}