document.addEventListener('DOMContentLoaded', () => {
  const stationCards = document.querySelectorAll('.station-card');
  stationCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      alert('Станция: ' + name);
    });
  });
});
