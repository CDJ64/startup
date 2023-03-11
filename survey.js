// Defining functions and objects

class PieChart {
    
}



// Code to execute when page is opened

const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = localStorage.getItem('pizzaName') ?? 'Guest';