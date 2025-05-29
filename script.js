function updateCountdown() {
  const now = new Date();
  const target = new Date('2025-09-07T00:00:00+07:00');
  const total = target - new Date('2025-01-01T00:00:00+07:00');
  const elapsed = target - now;
  const progress = 1 - (elapsed / total);

  const daysLeft = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((elapsed / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((elapsed / 1000) % 60);

  document.getElementById('progressBar').style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
  document.getElementById('countdown').textContent =
    `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds left`;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

setInterval(updateCountdown, 1000);
updateCountdown();
