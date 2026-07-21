const DEBUG = false; // manual debug switch

const characters = [
    {
        name: 'Koyomi Araragi',
        image: './img/monogatari/koyomi.webp',
    },
    {
        name: 'Karen Araragi',
        image: './img/monogatari/karen.webp',
    },
    {
        name: 'Tsukihi Araragi',
        image: './img/monogatari/tsukihi.webp',
    },
    {
        name: 'Hitagi Senjougahara',
        image: './img/monogatari/hitagi.webp',
    },
    {
        name: 'Mayoi Hachikuji',
        image: './img/monogatari/mayoi.webp',
    },
    {
        name: 'Suruga Kanbaru',
        image: './img/monogatari/suruga.webp',
    },
    {
        name: 'Nadeko Sengoku',
        image: './img/monogatari/nadeko.webp',
    },
    {
        name: 'Tsubasa Hanekawa',
        image: './img/monogatari/tsubasa.webp',
    },
    {
        name: 'Black Hanekawa',
        image: './img/monogatari/neko.webp',
    },
    {
        name: 'Shinobu Oshino',
        image: './img/monogatari/shinobu.webp',
    },
    {
        name: 'Sodachi Oikura',
        image: './img/monogatari/sodachi.webp',
    },
    {
        name: 'Ougi Oshino',
        image: './img/monogatari/ougi.webp',
    },
    {
        name: 'Meme Oshino',
        image: './img/monogatari/meme.webp',
    },
    {
        name: 'Deishuu Kaiki',
        image: './img/monogatari/deishuu.webp',
    },
    {
        name: 'Yozuru Kagenui',
        image: './img/monogatari/yozuru.webp',
    },
    {
        name: 'Yotsugi Ononoki',
        image: './img/monogatari/yotsugi.webp',
    },
    {
        name: 'Izuko Gaen',
        image: './img/monogatari/izuko.webp',
    },
    {
        name: 'Tadatsuru Teori',
        image: './img/monogatari/tadatsuru.webp',
    },
    {
        name: 'Tooe Gaen',
        image: './img/monogatari/tooe.webp',
    },
    {
        name: 'Rouka Numachi',
        image: './img/monogatari/rouka.webp',
    }
]

const picture = document.getElementById('picture');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
//stuff from local storage
const savedCharacter = localStorage.getItem('character_mono');
const savedDate = localStorage.getItem('date_mono');
const collection = JSON.parse(localStorage.getItem('collection_mono')) || [];

const collectionBtn = document.getElementById('collectionBtn');
const collectionPanel = document.getElementById('collectionPanel');

function buildCollectionPanel() {
    collectionPanel.innerHTML = '';
    const grid = document.createElement('section');
    grid.className = 'collection-grid';
    characters.forEach((character) => {
        const cell = document.createElement('div');
        cell.style.cssText = `text-align: center; font-size: 0.75rem;`;
        const found = collection.find(entry => entry.name === character.name);
        const img = document.createElement('img');
        img.style.cssText = `width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 0.5rem;`;
        img.src = found ? character.image : './img/unknown.jpg';
        img.title = found
            ? (found.count > 1 ? `${character.name} x${found.count}` : character.name)
            : 'locked';
        cell.appendChild(img);
        grid.appendChild(cell);
    })
    collectionPanel.appendChild(grid);
}

// open collection
collectionBtn.onclick = function() {
    collectionPanel.classList.toggle('open');
}
// close collection only if pressed outside of collection
document.onclick = function(event) {
    if (!collectionPanel.contains(event.target) && !collectionBtn.contains(event.target))  {
        collectionPanel.classList.remove('open');
    }
}

function showDebugGrid() {
    if (!DEBUG) return;
    // make the grid with all characters
    const grid = document.createElement('section');
    grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
        padding: 2rem;
        margin-top: 2rem;
    `;
    // looping over every char
    characters.forEach((char, i) => {
        const cell = document.createElement('div');
        cell.style.cssText = `text-align: center; font-size: 0.75rem;`;
        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;
        img.style.cssText = `width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 0.5rem;`;
        const label = document.createElement('p');
        // red thing if image fails to load
        img.onerror = () => {
            img.style.border = '3px solid red';
            label.style.color = 'red';
        };
        label.innerText = `[${i}] ${char.name}`;
        cell.appendChild(img);
        cell.appendChild(label);
        grid.appendChild(cell);
    });
    document.querySelector('main').appendChild(grid);
}

showDebugGrid();

function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const hours   = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    // padStart to make the thing be like 09:07:04 and not 9:7:4
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startCountdown() {
    rollBtn.innerText = `Come back in ${getTimeUntilMidnight()}`;
    // setInterval(func, 1000) is to repeat function every sec
    const interval = setInterval(() => {
        const time = getTimeUntilMidnight();
        rollBtn.innerText = `Come back in ${time}`;
        if (time === '00:00:00') {
            clearInterval(interval);
            location.reload();
        }
    }, 1000);
}

function displayCharacter (character) {
    picture.src = character.image;
    picture.alt = character.name;
    charname.innerText = character.name;
}

function saveCharacter (character) {
    localStorage.setItem('character_mono', JSON.stringify(character));
    localStorage.setItem('date_mono', today)
}

if (savedCharacter && savedDate === today) {
    const character = JSON.parse(savedCharacter);
    displayCharacter(character);
    rollBtn.disabled = true;
    startCountdown();
}

rollBtn.onclick = function () {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    displayCharacter(character);
    saveCharacter(character);
    rollBtn.disabled = true;
    startCountdown();
    // the find thing returns the object if found or undefined if not
    const found = collection.find(entry => entry.name === character.name);
    if (found) {
        // character already in collection so make count bigger
        found.count++;
    } else {
        // new character so add to collection
        collection.push({ name: character.name, image: character.image, count: 1 });
    }
    // save updated collection to local storage
    localStorage.setItem('collection_mono', JSON.stringify(collection));
    buildCollectionPanel()
}

buildCollectionPanel()