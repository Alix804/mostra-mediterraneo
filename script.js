/* =========================================
   1. DATI DELLE OPERE (Array Completo)
   ========================================= */
const opere = [
    { titolo: "Mappe e cartografia nel Medioevo", img: "assets/Decamerone.jpeg", desc: "Nel Medioevo la cartografia non è un sapere unitario...", raccordo: "In questo orizzonte la mappa non è solo uno strumento tecnico." },
    { titolo: "Petrarca e l'Itinerarium", img: "assets/quadro2.jpg", desc: "L’Itinerarium ad sepulcrum Domini di Petrarca...", raccordo: "Un viaggio spirituale attraverso i libri." },
    { titolo: "Dante: il viaggio", img: "assets/quadro2.jpg", desc: "Nella Commedia il viaggio è destino umano...", raccordo: "Dal mondo terreno all’ordine del cosmo." },
    { titolo: "La geografia della Commedia", img: "assets/quadro1.jpg", desc: "Lo spazio dantesco tra realtà e simbolo...", raccordo: "Una mappa dell'anima e del creato." },
    { titolo: "L'espansione dei confini", img: "assets/quadro1.jpg", desc: "Nuove rotte e nuove scoperte nell'Umanesimo...", raccordo: "Oltre le colonne d'Ercole." },
    { titolo: "La narrazione del mare", img: "assets/quadro2.jpg", desc: "Il mare come metafora del cambiamento...", raccordo: "Acque che uniscono culture diverse." },
    { titolo: "Conclusioni", img: "assets/quadro2.jpg", desc: "Sintesi del viaggio nelle Tre Corone...", raccordo: "La fine di un percorso, l'inizio di una nuova visione." }
];

let currentIndex = 0;


/* Logica di audio */
document.addEventListener('DOMContentLoaded', function() {
    const oceanAudio = document.getElementById('ocean-audio');
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

    // Inietta il contenuto dell'opera corrente
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
            span.textContent = words[i] + ' ';
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
