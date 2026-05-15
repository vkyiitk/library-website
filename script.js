const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function handleSearch(event) {
  event.preventDefault();
  const input = document.getElementById('searchInput');
  const resultTitle = document.getElementById('resultTitle');
  const query = input.value.trim() || 'Information Science';

  resultTitle.textContent = `Search Results: “${query}”`;
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function showLoginMessage() {
  alert('Demo login panel: connect this button with your library account system.');
}

function resetDemoFilters() {
  alert('Demo filters reset. You can connect these filters with your live catalog later.');
}

window.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    navLinks.classList.remove('active');
  }
});
