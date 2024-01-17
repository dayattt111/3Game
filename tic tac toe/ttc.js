const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cellIndex = event.target.dataset.cellIndex;
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkForWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkForWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            announceWinner(gameBoard[a]);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        announceWinner('Tie');
    }
}

function announceWinner(winner) {
    const winnerText = document.createElement('div');
    winnerText.textContent = winner === 'Tie' ? 'It\'s a tie!' : `${winner} wins!`;
    winnerText.style.fontSize = '2rem';
    winnerText.style.marginTop = '2rem';
    board.appendChild(winnerText);

    setTimeout(() => {
        winnerText.remove();
        resetBoard();
    }, 2000);
}

function resetBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetBoard);