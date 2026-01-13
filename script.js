// Predefined Guest List (Edit this array to add/remove guests. Names must match exactly.)
const guests = [
    "John Doe",  // Example guest - replace with real names
    "Jane Smith",
    // Add more like: "New Guest Name",
];

// Elements
const landing = document.getElementById('landing');
const accessDenied = document.getElementById('access-denied');
const invitation = document.getElementById('invitation');
const nameForm = document.getElementById('name-form');
const guestNameInput = document.getElementById('guest-name');
const countdownTimer = document.getElementById('countdown-timer');
const nasheed = document.getElementById('nasheed');
const muteBtn = document.getElementById('mute-btn');

// Handle Form Submission (Name Verification)
nameForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    const enteredName = guestNameInput.value.trim();
    
    if (guests.includes(enteredName)) {
        // Name matches: Show invitation with fade-in
        landing.classList.add('hidden');
        invitation.classList.remove('hidden');
        // Auto-play nasheed if not muted
        if (!nasheed.muted) {
            nasheed.play();
        }
    } else {
        // Name does not match: Show access denied
        landing.classList.add('hidden');
        accessDenied.classList.remove('hidden');
    }
});

// Mute/Unmute Button (Optional)
muteBtn.addEventListener('click', function() {
    if (nasheed.muted) {
        nasheed.muted = false;
        muteBtn.textContent = '🔊 Mute';
    } else {
        nasheed.muted = true;
        muteBtn.textContent = '🔇 Unmute';
    }
});

// Countdown Timer to First Nikah (13 March 2027) (Optional)
function updateCountdown() {
    const now = new Date();
    const nikahDate = new Date('March 13, 2027 00:00:00');
    const timeDiff = nikahDate - now;
    
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        countdownTimer.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    } else {
        countdownTimer.textContent = 'The Nikah has begun!';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
