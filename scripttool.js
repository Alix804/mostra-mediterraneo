// --- LOGICA: Scatola a sinistra, oggetti escono uno alla volta e si possono spostare ---
// (Unica dichiarazione, nessun doppione)
const playArea = document.getElementById('play-area');
const boxTrigger = document.getElementById('box-trigger');

// Lista oggetti disponibili con immagini
const objects = [
    { label: 'Letto', img: 'assets/tools/letto.png', width: 480, height: 320 },    // proporzione 3:2
    { label: 'Sedia', img: 'assets/tools/sedia.png', width: 400, height: 400 },   // proporzione 5:7
    { label: 'Tavolo', img: 'assets/tools/tavolo.png', width: 660, height: 420 },  // proporzione 11:7
    { label: 'Finestra', img: 'assets/tools/finbocc.png', width: 500, height: 300 },
    { label: 'Libreria', img: 'assets/tools/libreria.png', width: 500, height: 300 },
    { label: 'Tappeto', img: 'assets/tools/tappeto.png', width: 500, height: 300 },
    { label: 'Brocca', img: 'assets/tools/brocca.png', width: 500, height: 300 }
 
];
let remaining = [...objects];

function getRandomPosition(area, size=60) {
    const padding = 10;
    const maxX = area.clientWidth - size - padding;
    const maxY = area.clientHeight - size - padding;
    const x = Math.floor(Math.random() * maxX) + padding;
    const y = Math.floor(Math.random() * maxY) + padding;
    return { x, y };
}

function enableDrag(item) {
    let isMoving = false;
    let offsetX = 0, offsetY = 0;
    let moveHandler, upHandler;

    item.addEventListener('click', function(e) {
        if (!isMoving) {
            // Primo click: inizia movimento
            isMoving = true;
            item.style.zIndex = 1000;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            // Attiva movimento col mouse
            moveHandler = function(ev) {
                if (!isMoving) return;
                let x = ev.clientX - playArea.getBoundingClientRect().left - offsetX;
                let y = ev.clientY - playArea.getBoundingClientRect().top - offsetY;
                x = Math.max(0, Math.min(x, playArea.clientWidth - item.offsetWidth));
                y = Math.max(0, Math.min(y, playArea.clientHeight - item.offsetHeight));
                item.style.left = x + 'px';
                item.style.top = y + 'px';
            };
            document.addEventListener('mousemove', moveHandler);
        } else {
            // Secondo click: termina movimento
            isMoving = false;
            item.style.zIndex = '';
            document.removeEventListener('mousemove', moveHandler);
        }
    });
}

boxTrigger.addEventListener('click', function() {
    if (remaining.length === 0) return;
    const idx = Math.floor(Math.random() * remaining.length);
    const obj = remaining.splice(idx, 1)[0];
    const div = document.createElement('div');
    div.className = 'tool-item';
    div.style.position = 'absolute';
    div.style.cursor = 'grab';
    div.title = obj.label;
    // Inserisci immagine
    const img = document.createElement('img');
    img.src = obj.img;
    img.alt = obj.label;
    img.style.width = (obj.width || 100) + 'px';
    img.style.height = (obj.height || 100) + 'px';
    div.appendChild(img);

    // Calcola posizione random in base alla dimensione dell'oggetto
    const size = Math.max(obj.width || 100, obj.height || 100);
    const { x, y } = getRandomPosition(playArea, size);
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    playArea.appendChild(div);
    enableDrag(div);
});
