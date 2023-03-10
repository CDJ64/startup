const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = localStorage.getItem('pizzaName') ?? 'Guest';