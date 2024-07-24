const validPasswords = [
    'd!3H6$gT7#1', 'P4%rG8nE$2@', 't^7U2#jL9*5', 'K8&h#4I1$3', 'w9$E2#G7*5',
    // Add remaining 145 passwords here
];

const usedPasswords = new Set();

function login() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const loginMessage = document.getElementById('loginMessage');

    if (validPasswords.includes(password) && !usedPasswords.has(password)) {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('password', password);
        usedPasswords.add(password);
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
    } else {
        loginMessage.textContent = 'Invalid or already used password. Please try again.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
    }

    const spinBtn = document.getElementById('spinBtn');
    const message = document.getElementById('message');
    const wheel = document.getElementById('wheel');

    const prizes = [
        { name: 'Digital Graphic Design Calendar', probability: 5 },
        { name: '₦50 Airtime', probability: 3 },
        { name: '₦100 Airtime', probability: 3 },
        { name: '₦150 Airtime', probability: 2 },
        { name: '₦200 Airtime', probability: 2 },
        { name: '₦250 Airtime', probability: 2 },
        { name: '₦300 Airtime', probability: 2 },
        { name: '₦350 Airtime', probability: 1.5 },
        { name: '₦400 Airtime', probability: 1.5 },
        { name: '₦450 Airtime', probability: 1 },
        { name: '₦500 Airtime', probability: 1 },
        { name: '40MB Data', probability: 2 },
        { name: '100MB Data', probability: 2 },
        { name: '200MB Data', probability: 1.5 },
        { name: '300MB Data', probability: 1.5 },
        { name: '500MB Data', probability: 1 },
        { name: '750MB Data', probability: 1 },
        { name: '1GB Data', probability: 0.5 },
        { name: '1.2GB Data', probability: 0.5 },
        { name: '1.5GB Data', probability: 0.5 },
        { name: '2GB Data', probability: 0.5 },
        { name: 'Follow', probability: 10 },
        { name: 'Like', probability: 15 },
        { name: 'Personalized Comment', probability: 5 },
        { name: 'Share', probability: 5 }
    ];

    function spinWheel() {
        spinBtn.disabled = true;
        const prizeIndex = getRandomPrizeIndex();
        const prize = prizes[prizeIndex];
        const angle = 360 * 10 + (360 / prizes.length) * prizeIndex;

        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${angle}deg)`;

        setTimeout(() => {
            const password = sessionStorage.getItem('password');
            message.innerHTML = `You won: ${prize.name}!<br>Your password: <span style="font-style: italic; font-family: cursive;">${password}</span>`;
            spinBtn.disabled = false;
        }, 4000);
    }

    function getRandomPrizeIndex() {
        const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0);
        const randomValue = Math.random() * totalProbability;
        let accumulatedProbability = 0;

        for (let i = 0; i < prizes.length; i++) {
            accumulatedProbability += prizes[i].probability;
            if (randomValue <= accumulatedProbability) {
                return i;
            }
        }
    }
}); 
