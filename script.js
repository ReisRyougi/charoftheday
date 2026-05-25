const characters = [
    // Tsukihime
    {
        name: 'Arcueid Brunestud',
        image: './img/tm/t/arc.jpg'
    },
    {
        name: 'Tohno Shiki',
        image: './img/tm/t/tohno.png'
    },
    {
        name: 'Tohno Akiha',
        image: './img/tm/t/akiha.webp'
    },
    {
        name: 'Hisui',
        image: './img/tm/t/hisui.webp'
    },
    {
        name: 'Yumizuka Satsuki',
        image: './img/tm/t/satsuki.webp'
    },
    {
        name: 'Len',
        image: './img/tm/t/len.webp'
    },
    {
        name: 'Kohaku',
        image: './img/tm/t/kohaku.webp'
    },
    {
        name: 'Ciel',
        image: './img/tm/t/ciel.webp'
    },
    {
        name: 'Neco-Arc',
        image: './img/tm/t/necoarc.webp'
    },
    {
        name: 'ORT',
        image: './img/tm/t/ort.png'
    },
    {
        name: 'Michael Roa Valdamjong',
        image: './img/tm/t/mrv.png'
    },
    {
        name: 'Kischur Zelretch Schweinorg',
        image: './img/tm/t/zelretch.webp'
    },
    {
        name: 'Sion Eltnam Atlasia',
        image: './img/tm/t/sion.webp'
    },
    // Fate Stay Night
    {
        name: 'Artoria Pendragon',
        image: './img/tm/fsn/saber.jpg'
    },
    {
        name: 'Emiya Shiro',
        image: './img/tm/fsn/shiro.jpg'
    },
    {
        name: 'Illyasviel von Einzbern',
        image: './img/tm/fsn/illya.jpg'
    },
    {
        name: 'Rin Tohsaka',
        image: './img/tm/fsn/rin.webp'
    },
    {
        name: 'EMIYA',
        image: './img/tm/fsn/emiya.webp'
    },
    {
        name: 'Heracles',
        image: './img/tm/fsn/heracles.webp'
    },
    {
        name: 'Matou Sakura',
        image: './img/tm/fsn/sakura.webp'
    },
    {
        name: 'Matou Shinji',
        image: './img/tm/fsn/shinji.webp'
    },
    {
        name: 'Medusa',
        image: './img/tm/fsn/medusa.webp'
    },
    {
        name: 'Medea',
        image: './img/tm/fsn/medea.webp'
    },
    {
        name: 'Kuzuki Souichirou',
        image: './img/tm/fsn/souichirou.webp'
    },
    {
        name: 'Sasaki Kojirou',
        image: './img/tm/fsn/kojirou.webp'
    },
    {
        name: 'Cú Chulainn',
        image: './img/tm/fsn/cu.jpg'
    },
    {
        name: 'Kotomine Kirei',
        image: './img/tm/fsn/kirei.jpg'
    },
    {
        name: 'Gilgamesh',
        image: './img/tm/fsn/gil.jpg'
    },
    {
        name: 'Matou Zouken',
        image: './img/tm/fsn/zouken.webp'
    },
    {
        name: 'Hassan of the Cursed Arm',
        image: './img/tm/fsn/hassan.webp'
    },
    {
        name: 'Fujimura Taiga',
        image: './img/tm/fsn/taiga.webp'
    },
    {
        name: 'Artoria Pendragon Alter',
        image: './img/tm/fsn/salter.webp'
    },
    // KnK
    {
        name: 'Ryougi Shiki',
        image: './img/tm/knk/ryougi.jpg'
    },
    {
        name: 'Araya Souren',
        image: './img/tm/knk/araya.webp'
    },
    {
        name: 'Kokutou Mikiya',
        image: './img/tm/knk/mikiya.webp'
    },
    {
        name: 'Kokutou Azaka',
        image: './img/tm/knk/azaka.webp'
    },
    {
        name: 'Asagami Fujino',
        image: './img/tm/knk/fujino.webp'
    },
    {
        name: 'Aozaki Touko',
        image: './img/tm/knk/touko.webp'
    },
    // Mahoyo
    {
        name: 'Aozaki Aoko',
        image: './img/tm/mh/aoko.jpg'
    },
    {
        name: 'Kuonji Alice',
        image: './img/tm/mh/alice.jpg'
    },
    {
        name: 'May Riddell Archelot',
        image: './img/tm/mh/may.jpg'
    },
    {
        name: 'Lugh Beowulf',
        image: './img/tm/mh/beo.webp'
    },
    {
        name: 'Tobimaru Tsukiji',
        image: './img/tm/mh/tobimaru.jpg'
    },
    {
        name: 'Kojika Kumari',
        image: './img/tm/mh/kumari.jpg'
    },
    {
        name: 'Housuke Kinomi',
        image: './img/tm/mh/kinomi.jpg'
    },
    {
        name: 'Suse Ritsuka',
        image: './img/tm/mh/ritsuka.jpg'
    },
    {
        name: 'Suse Yuika',
        image: './img/tm/mh/yuika.jpg'
    },
    {
        name: 'Fumizuka Eiri',
        image: './img/tm/mh/eiri.webp'
    },
    // Fate Hollow Ataraxia

]

const picture = document.getElementById('picture');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
const savedCharacter = localStorage.getItem('character');
const savedDate = localStorage.getItem('date');

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
    localStorage.setItem('character', JSON.stringify(character));
    localStorage.setItem('date', today)
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
}
