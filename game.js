document.addEventListener('DOMContentLoaded', () => {
    const spinBtn = document.getElementById('spinBtn');
    const message = document.getElementById('message');
    const wheel = document.getElementById('wheel');

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

    // Function to spin the wheel
    function spinWheel() {
        spinBtn.disabled = true;
        const prizeIndex = getRandomPrizeIndex();
        const prize = prizes[prizeIndex];
        const angle = 360 * 10 + (360 / prizes.length) * prizeIndex; // Adjust angle for each prize, 10 full rotations

        // Animate wheel spin
        wheel.style.transition = 'transform 1s ease-out'; // Adjusted speed
        wheel.style.transform = `rotate(${angle}deg)`;

        // Display prize after spin
        setTimeout(() => {
            message.textContent = `You won: ${prize.name}!`;
            spinBtn.disabled = false;
            sendPrizeToAdmin(prize.name); // Send prize to Admin
        }, 1000); // Adjusted time to match spin duration
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

    // Function to send prize information to the admin
    function sendPrizeToAdmin(prizeName) {
        const adminPhoneNumber = '+2347041406629'; // Admin WhatsApp number
        const message = `Prize Notification: User won a prize! 🎉 Prize: ${prizeName}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

        // Create an invisible iframe to send the request silently
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = whatsappUrl;
        document.body.appendChild(iframe);

        // Remove the iframe after some time to avoid clutter
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 5000);
    }

    // Event listener for the spin button
    spinBtn.addEventListener('click', spinWheel);
});
