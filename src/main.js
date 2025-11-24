import './style.css'

// Countdown Timer Logic
const tripDate = new Date('February 13, 2026 00:00:00').getTime();

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = tripDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "IT'S TIME TO SHRED!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdownElement.innerHTML = `
    <div class="countdown-item">
      <span>${days}</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-item">
      <span>${hours}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-item">
      <span>${minutes}</span>
      <span class="countdown-label">Mins</span>
    </div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
