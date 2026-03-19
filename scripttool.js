// --- LOGICA: Scatola a sinistra, oggetti escono uno alla volta e si possono spostare ---
// (Unica dichiarazione, nessun doppione)
const playArea = document.getElementById('play-area');
const boxTrigger = document.getElementById('box-trigger');

// Lista oggetti disponibili con immagini
const objects = [
    { label: 'Letto', img: 'assets/tools/letto.png', width:400, height: 300, loading: 'lazy', decoding: 'async' },
    { label: 'Sedia', img: 'assets/tools/sedia.png', width: 140, height: 200, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Tavolo', img: 'assets/tools/tavolo.png', width: 300, height: 150, loading: 'lazy', decoding: 'async' },
    { label: 'Libreria', img: 'assets/tools/libreria.png', width: 250, height: 225, loading: 'lazy', decoding: 'async' },
    //{ label: 'Tappeto', img: 'assets/tools/tappeto.png', width: 800, height: 400 },
    { label: 'Brocca', img: 'assets/tools/brocca.png', width: 80, height: 100, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Libro', img: 'assets/tools/libro.png', width: 120, height: 80, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Pergamene', img: 'assets/tools/pergamene.png', width: 100, height: 60, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Calamaio', img: 'assets/tools/calamaio.png', width: 60, height: 100, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Candela', img: 'assets/tools/candela.png', width: 60, height: 100, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Lanterna', img: 'assets/tools/lanterna.png', width: 100, height: 150, zIndex: 2000, loading: 'lazy', decoding: 'async' },
    { label: 'Mitico', img: 'assets/tools/mitico.png', width: 200, height: 400, zIndex: 2100, loading: 'lazy', decoding: 'async' }
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
        // Calcola coordinate relative all'immagine
        const img = item.querySelector('img');
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Definisci rettangolo centrale (70% larghezza, 80% altezza, centrato)
        const centerW = rect.width * 0.7;
        const centerH = rect.height * 0.8;
        const startX = (rect.width - centerW) / 2;
        const startY = (rect.height - centerH) / 2;
        if (x < startX || x > startX + centerW || y < startY || y > startY + centerH) {
            // Click fuori dal rettangolo centrale: ignora
            return;
        }
        if (!isMoving) {
            // Primo click: inizia movimento
            isMoving = true;
            // Se l'oggetto ha zIndex alto, lo mantiene, altrimenti lo porta in primo piano temporaneamente
            const oggettoPiccolo = item.style.zIndex && Number(item.style.zIndex) >= 2000;
            if (!oggettoPiccolo) item.style.zIndex = 1500;
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
            // Se l'oggetto ha zIndex alto, lo mantiene, altrimenti lo riporta a default
            const oggettoPiccolo = item.style.zIndex && Number(item.style.zIndex) >= 2000;
            if (!oggettoPiccolo) item.style.zIndex = '';
            document.removeEventListener('mousemove', moveHandler);
        }
    });
}

boxTrigger.addEventListener('click', function() {
    if (remaining.length === 0) return;
    // Se rimane solo mitico, estrai quello, altrimenti escludilo dal random
    let idx;
    if (remaining.length === 1 && remaining[0].label === 'Mitico') {
        idx = 0;
    } else {
        // Cerca mitico
        const miticoIdx = remaining.findIndex(o => o.label === 'Mitico');
        // Escludi mitico dal random finché non è l'ultimo
        const pool = remaining.filter(o => o.label !== 'Mitico');
        idx = Math.floor(Math.random() * pool.length);
        // Trova l'indice reale nell'array remaining
        const realIdx = remaining.indexOf(pool[idx]);
        idx = realIdx;
    }
    const obj = remaining.splice(idx, 1)[0];
    const div = document.createElement('div');
    div.className = 'tool-item';
    div.style.position = 'absolute';
    div.style.cursor = 'grab';
    div.title = obj.label;
    // Z-index personalizzato se presente nell'oggetto
    if (obj.zIndex) {
        div.style.zIndex = obj.zIndex;
    }
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
