const validPasswords = [
    "d!3H6$gT7#1", "P4%rG8nE$2@", "t^7U2#jL9*5", "K8&h#4I1$3", "w9$E2#G7*5", "S8*u#2H6$5", "N7@j$3T8^1", "L9%r#4G2*7", "V6&h$5I1@3", "b!3J6%gT7#4", "D4*n#8R2@5", "t^2Y7#jL6*3", "K8&d#1I4$5", "w9@E2#H6*3", "U7%g$5I3@4", "M8*j#2T7^5", "Q6&h$4I3%2", "Z9@r#5G8*3", "P8*u#2H6%4", "L3@n$5J7^2", "N6&h#1I8*4", "w9%E3#G2@5", "J7*u#4R5%1", "D8*h#2I7^3", "V6&g$5T3@4", "S7@r#2H8%5", "L9%g$4I1^3", "K8*j#5T2*7", "w3&d#1I6$4", "N7@h#2G8*5", "P4%g$5I3^2", "J9*u#3R6@4", "D8*n#2H7%5", "V6&h$1I3*4", "S7@r#5G2%3", "L3%g$4T6^2", "K8*j#1I5*7", "w9&E2#H4$3", "N7@u#5G3%4", "J8*g$1I2^5", "P6&h#3T4@7", "D4*u#5R7%2", "V6&n$2H3*1", "S7@d#4I5%3", "L8%g$1T6^2", "K3*j#5I2*4", "w9&h#4G1$7", "N7@u#5I2%3", "J8*n$4T3^1", "P6&g#1H5@4", "D3*u#2R7%5", "V6&n$5I4*3", "S7@d#2H1%4", "L8%g$5T3^2", "K4*j#1I2*7", "w9&h#3G4$5", "N7@u#1I2%4", "J8*n$5T3^4", "P6&g#2H1@7", "D3*u#4R5%2", "V6&n$1I3*2", "S7@d#5H2%3", "L8%g$3T1^4", "K4*j#2I5*3", "w9&h#1G4$2", "N7@u#3I5%1", "J8*n$4T2^5", "P6&g#5H1@2", "D3*u#1R4%7", "V6&n$2I3*4", "S7@d#1H5%3", "L8%g$2T4^1", "K4*j#3I1*5", "w9&h#2G5$1", "N7@u#4I3%2", "J8*n$5T1^3", "P6&g#1H2@4", "D3*u#5R3%1", "V6&n$4I2*5", "S7@d#3H1%4", "L8%g$5T4^2", "K4*j#1I3*7", "w9&h#5G4$3", "N7@u#2I4%1", "J8*n$1T5^3", "P6&g#3H4@2", "D3*u#2R1%5", "V6&n$5I3*4", "S7@d#4H2%1", "L8%g$1T2^4", "K4*j#5I3*1", "w9&h#4G2$5", "N7@u#3I1%4", "J8*n$2T5^1", "P6&g#4H3@5", "D3*u#1R2%4", "V6&n$3I5*2", "S7@d#5H4%1", "L8%g$2T1^5", "K4*j#3I4*1", "w9&h#1G5$3", "N7@u#5I2%1", "J8*n$3T4^2", "P6&g#1H5@3", "D3*u#4R2%5", "V6&n$2I1*4", "S7@d#1H3%2", "L8%g$3T5^1", "K4*j#2I4*3", "w9&h#5G3$1", "N7@u#4I5%2", "J8*n$2T3^4", "P6&g#3H1@5", "D3*u#5R4%1", "V6&n$1I2*3", "S7@d#3H2%5", "L8%g$4T1^2", "K4*j#5I2*4", "w9&h#3G1$2", "N7@u#2I5%3", "J8*n$4T5^1", "P6&g#1H3@4", "D3*u#2R4%5", "V6&n$5I1*3", "S7@d#1H4%2", "L8%g$5T3^4", "K4*j#2I1*3", "w9&h#5G2$4", "N7@u#1I3%5", "J8*n$3T2^1", "P6&g#5H4@2", "D3*u#1R3%4", "V6&n$2I4*5", "S7@d#4H3%1", "L8%g$1T4^2", "K4*j#3I5*2", "w9&h#2G3$5", "N7@u#5I1%4", "J8*n$4T3^5", "P6&g#2H1@3", "D3*u#5R2%1", "V6&n$1I3*5", "S7@d#3H5%4", "L8%g$4T2^1", "K4*j#1I5*3", "w9&h#3G2$1", "N7@u#2I4%5", "J8*n$1T3^4", "P6&g#4H2@3", "D3*u#3R5%1", "V6&n$2I4*5", "S7@d#4H3%1", "L8%g$1T4^2", "K4*j#3I5*2", "w9&h#2G3$5", "N7@u#5I1%4", "J8*n$4T3^5", "P6&g#2H1@3", "D3*u#5R2%1", "V6&n$1I3*5", "S7@d#3H5%4", "L8%g$4T2^1", "K4*j#1I5*3", "w9&h#3G2$1", "N7@u#2I4%5", "J8*n$1T3^4", "P6&g#4H2@3", "D3*u#3R5%1", "V6&n$2I4*5", "S7@d#4H3%1", "L8%g$1T4^2", "K4*j#3I5*2", "w9&h#2G3$5", "N7@u#5I1%4", "J8*n$4T3^5", "P6&g#2H1@3", "D3*u#5R2%1", "V6&n$1I3*5", "S7@d#3H5%4", "L8%g$4T2^1", "K4*j#1I5*3", "w9&h#3G2$1", "N7@u#2I4%5", "J8*n$1T3^4", "P6&g#4H2@3", "D3*u#3R5%1", "V6&n$2I4*5", "S7@d#4H3%1", "L8%g$1T4^2", "K4*j#3I5*2", "w9&h#2G3$5", "N7@u#5I1%4", "J8*n$4T3^5", "P6&g#2H1@3", "D3*u#5R2%1", "V6&n$1I3*5", "S7@d#3H5%4", "L8%g$4T2^1", "K4*j#1I5*3", "w9&h#3G2$1", "N7@u#2I4%5", "J8*n$1T3^4", "P6&g#4H2@3"
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
