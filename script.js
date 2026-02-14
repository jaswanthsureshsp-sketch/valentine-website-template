const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const magic = document.getElementById("magic");
const gift = document.getElementById("giftScreen");
const letterScreen = document.getElementById("letterScreen");
const typedLetter = document.getElementById("typedLetter");
const music = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const funnyMsg = document.getElementById("funnyMsg");
const foreverScreen = document.getElementById("foreverScreen");

let noCount = 0;


let musicStarted = false;


const correctPassword = "Love you"; 

function unlockSite() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        startIntroFlow(); 
    } else {
        error.textContent = "Wrong password 🥺";
    }
}


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") unlockSite();
});

function startMusic() {
    if (!musicStarted) {
        music.volume = 0.5;
        music.play().catch(() => {});
        musicStarted = true;
    }
}

document.body.addEventListener("click", startMusic, { once: true });


function spawnIntroHearts() {
    const intro = document.getElementById("intro");

    const heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "intro-heart";
        heart.innerText = "❤";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 12) + "px";

        intro.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 300);

    setTimeout(() => clearInterval(heartInterval), 4000);
}


function startIntroFlow() {
    setTimeout(() => {
        spawnIntroHearts();

        const texts = intro.querySelectorAll(".fade-text");
        texts.forEach(t => t.classList.add("float-out"));

        setTimeout(() => {
            intro.classList.remove("active");
            proposal.classList.add("active");
            music.play();
        }, 3500);

    }, 4500);
}


noBtn.onclick = () => {
    noCount++;
    const msgs = [
        "I will cry 🥺",
        "I will cry harder 😭",
        "I will cry more harder 💔",
        "I heart blast aga poguthu yes kudu chello"
    ];
    funnyMsg.textContent = msgs[Math.min(noCount-1, msgs.length-1)];
    yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;
};


yesBtn.onclick = () => {
    proposal.classList.remove("active");
    magic.classList.add("active");

    setTimeout(() => {
        magic.classList.remove("active");
        gift.classList.add("active");
    }, 1500);
};


function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart-rain";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}


const letterText = `  I love you..........'

                    
Your's SP`;


function typeLetter(text, el) {
    let i = 0;
    function type() {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(type, 40);
        }
    }
    type();
}


function transformToBubbly() {
    const chocolate = document.getElementById('chocolate');
    const bubbles = document.getElementById('bubbles');

    chocolate.classList.add('zoom-bubbly');
    bubbles.style.opacity = '1';

    if (!bubbles.children.length) {
        for (let i = 0; i < 9; i++) {
            const b = document.createElement('div');
            b.className = 'bubble';
            bubbles.appendChild(b);
        }
    }

    setTimeout(() => {
        gift.classList.remove("active");
        letterScreen.classList.add("active");
        typeLetter(letterText, typedLetter);
        startHeartRain();
    }, 2500);
}
