const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let currentIndex = 0;

function updateCardPosition() {
    const offset = -currentIndex * 110; // 100px card width + 10px margin
    cardContainer.style.transform = `translateX(${offset}px)`;
}

leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardPosition();
    }
});

rightBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 5) { // Adjust based on number of visible cards
        currentIndex++;
        updateCardPosition();
    }
});