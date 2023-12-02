var flame = document.getElementById('flame');

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
    
    // Удаление слушателя событий после первого клика
    flame.removeEventListener('click', flameToggle);
}

flame.addEventListener('click', flameToggle);