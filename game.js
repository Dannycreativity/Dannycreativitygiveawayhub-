document.addEventListener('DOMContentLoaded', () => {
    const spinBtn = document.getElementById('spinBtn');
    const message = document.getElementById('message');
    const wheel = document.getElementById('wheel');
    const pointer = document.querySelector('.pointer');
    const sessionIdInput = document.getElementById('sessionId');
    const verifyBtn = document.getElementById('verifyBtn');
    const verificationMessage = document.getElementById('verificationMessage');

    // Prizes and their probabilities
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

    let currentSessionId = '';

    // Function to generate a unique session ID
    function generateSessionId() {
        return 'session-' + Math.random().toString(36).substr(2, 9);
    }

    // Function to spin the wheel
    function spinWheel() {
        spinBtn.disabled = true;
        currentSessionId = generateSessionId(); // Generate new session ID
        const prizeIndex = getRandomPrizeIndex();
        const prize = prizes[prizeIndex];
        const angle = 360 * 10 + (360 / prizes.length) * prizeIndex; // Adjust angle for each prize

        // Animate wheel spin
        wheel.style.transition = 'transform 2s ease-out'; // Increased speed
        wheel.style.transform = `rotate(${angle}deg)`;

        // Display prize after spin
        setTimeout(() => {
            message.textContent = `You won: ${prize.name}! Session ID: ${currentSessionId}`;
            spinBtn.disabled = false;
        }, 2000); // Adjusted timeout to match the speed of the wheel
    }

    // Function to get a random prize index based on probabilities
    function getRandomPrizeIndex() {
        const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0);
        const randomValue = Math.random() * totalProbability;
        let accumulatedProbability = 0;

        for (let i = 0; i < prizes.length; i++) {
            accumulatedProbability += prizes[i].probability;
            if (randomValue < accumulatedProbability) {
                return i;
            }
        }
        return prizes.length - 1; // Fallback
    }

    // Function to verify the session ID
    function verifySessionId() {
        const enteredSessionId = sessionIdInput.value;
        if (enteredSessionId === currentSessionId) {
            verificationMessage.textContent = 'Session ID verified successfully!';
        } else {
            verificationMessage.textContent = 'Invalid Session ID. Please check and try again.';
        }
    }

    // Event listener for the spin button
    spinBtn.addEventListener('click', spinWheel);

    // Event listener for the verify button
    verifyBtn.addEventListener('click', verifySessionId);
});
