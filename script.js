const characters = [
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
    }
]

const picture = document.getElementById('picture');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
const savedCharacter = localStorage.getItem('character');
const savedDate = localStorage.getItem('date');

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
    rollBtn.innerText = 'Come back tomorrow'
}

rollBtn.onclick = function () {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    displayCharacter(character);
    saveCharacter(character);
    rollBtn.disabled = true;
    rollBtn.innerText = 'Come back tomorrow'
}
