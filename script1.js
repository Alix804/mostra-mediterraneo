/* =========================================
   1. DATI DELLE OPERE (Array Completo)
   ========================================= */
const opere = [
    {    titolo: "Rappresentare il mondo: mappe e cartografia nel Medioevo",
    img: "assets/Decamerone.jpeg",
    desc: `Nel Medioevo la cartografia non è un sapere unitario, ma un insieme di forme diverse di rappresentazione dello spazio, ciascuna con funzioni specifiche. Accanto ai mappamondi simbolici convivono infatti carte pragmatiche, pensate per la navigazione, e rappresentazioni più complesse capaci di integrare coste, territori interni e assetti politici.
Tra i modelli più diffusi si trova il mappamondo di tipo T O, in cui il mondo abitato appare come un disco circondato dall’oceano e i tre continenti sono separati dal Mediterraneo e dai grandi fiumi orientali. Non si tratta di una carta costruita per orientarsi nello spazio, ma di uno schema che rende visibile l’ordine generale del mondo e ne fissa nella memoria la struttura.
Accanto a questa tradizione si sviluppano tra Duecento e Trecento le carte nautiche, strumenti destinati alla navigazione commerciale. In esse l’attenzione si concentra sulla precisione delle coste, dei porti, delle rotte e dei pericoli del mare. Il Mediterraneo vi appare come uno spazio fitto di approdi e di collegamenti, intensamente percorso da uomini, merci e informazioni.
Le mappe medievali non servono dunque soltanto a localizzare i luoghi. Servono anche a organizzare il sapere, a dare forma al mondo e a collocare l’esperienza umana entro una visione più ampia dello spazio e della storia.`,
    raccordo: `In questo orizzonte culturale la mappa non è solo uno strumento tecnico. Può diventare anche un mezzo per viaggiare con l’intelligenza, con la memoria e con i libri.`
},
    { titolo: "Mappe e cartografia nel Medioevo", img: "assets/Decamerone.jpeg", desc: "Nel Medioevo la cartografia non è un sapere unitario...", raccordo: "In questo orizzonte la mappa non è solo uno strumento tecnico." },
    { titolo: "Petrarca e l'Itinerarium", img: "assets/quadro2.jpg", desc: "L’Itinerarium ad sepulcrum Domini di Petrarca...", raccordo: "Un viaggio spirituale attraverso i libri." },
    { titolo: "Dante: il viaggio", img: "assets/quadro2.jpg", desc: "Nella Commedia il viaggio è destino umano...", raccordo: "Dal mondo terreno all’ordine del cosmo." },
    { titolo: "La geografia della Commedia", img: "assets/quadro1.jpg", desc: "Lo spazio dantesco tra realtà e simbolo...", raccordo: "Una mappa dell'anima e del creato." },
    { titolo: "L'espansione dei confini", img: "assets/quadro1.jpg", desc: "Nuove rotte e nuove scoperte nell'Umanesimo...", raccordo: "Oltre le colonne d'Ercole." },
    { titolo: "Conclusioni", img: "assets/quadro2.jpg", desc: "Sintesi del viaggio nelle Tre Corone...", raccordo: "La fine di un percorso, l'inizio di una nuova visione." }
];

let currentIndex = 0;
// Logica di audio (se serve su questa pagina)
document.addEventListener('DOMContentLoaded', function() {
    const oceanAudio = document.getElementById('ocean-audio');
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    let audioEnabled = false;

    function updateAudioIcon() {
        if (!audioIcon) return;
        if (audioEnabled) {
            audioIcon.textContent = '🔇';
        } else {
            audioIcon.textContent = '🔊';
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
                    audioEnabled = false;
                    updateAudioIcon();
                    alert('Impossibile avviare l\'audio: interagisci con la pagina.');
                });
            } else {
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

// LOGICA QUADRI (Flip e Apertura Modale)
document.querySelectorAll('.painting-frame').forEach(frame => {
    // Gestione FLIP
    const flipBtn = frame.querySelector('.flip-btn');
    if (flipBtn) {
        flipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            frame.classList.toggle('flipped');
        });
    }
    frame.addEventListener('mouseleave', () => {
        frame.classList.remove('flipped');
    });
    // Apertura Modale
    frame.addEventListener('click', (e) => {
        if (e.target.classList.contains('flip-btn')) return;
        const idx = frame.getAttribute('data-index');
        openModal(idx);
    });
});

// GESTIONE MODALE
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
    document.querySelectorAll('.thumb').forEach((t, i) => {
        t.classList.toggle('active', i === currentIndex);
    });
    content.innerHTML = `
        <img src="${opere[currentIndex].img}" class="modal-img">
        <div class="modal-text-area">
            <h2>${opere[currentIndex].titolo}</h2>
            <p>${opere[currentIndex].desc}</p>
            <div class="raccordo-cartiglio" onclick="startCartiglio(this)">
                Approfondimento &rarr;
                <div class="raccordo-testo" data-fulltext="${opere[currentIndex].raccordo}"></div>
            </div>
        </div>
    `;
}

// ANIMAZIONE CARTIGLIO E NAVIGAZIONE AUTO
function startCartiglio(element) {
    if (element.classList.contains('animating')) return;
    element.classList.add('animating');
    const textBox = element.querySelector('.raccordo-testo');
    const fullText = textBox.getAttribute('data-fulltext');
    const words = fullText.split(' ');
    textBox.innerHTML = '';
    textBox.style.display = 'block';
    let i = 0;
    const interval = setInterval(function() {
        if (i < words.length) {
            const span = document.createElement('span');
            span.className = 'fade-in-word';
            span.textContent = words[i] + ' ';
            textBox.appendChild(span);
            setTimeout(function() { span.classList.add('visible'); }, 10);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(function() {
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
document.querySelectorAll('.thumb').forEach(function(thumb, i) {
    thumb.addEventListener('click', function() {
        showPainting(i);
    });
});

// Porta che si apre per accedere alla pagina nascosta
function openDoorAndRedirect(url) {
    const door = document.querySelector('.door');
    door.classList.add('open');
    setTimeout(function() {
        window.location.href = url;
    }, 1500);
}