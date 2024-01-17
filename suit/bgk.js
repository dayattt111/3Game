const drawCardButton = document.getElementById('drawCard');
const suitElement = document.getElementById('suit');

const suits = ['♣️', '♦️', '♥️', '♠️'];
const deck = [];

for (let suit of suits) {
    for (let i = 1; i <= 13; i++) {
        deck.push(`${i} of ${suit}`);
    }
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

shuffleDeck(deck);

let currentCard;

drawCardButton.addEventListener('click', () => {
    if (deck.length > 0) {
        currentCard = deck.pop();
        suitElement.textContent = `Current Suit: ${getSuit(currentCard)}`;
    } else {
        suitElement.textContent = 'Deck is empty!';
        drawCardButton.disabled = true;
    }
});

function getSuit(card) {
    const suitIndex = card.lastIndexOf(suits[0]);
    return suits[suitIndex];
}