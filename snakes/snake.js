const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');

const boxSize = 20;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const widthInBoxes = canvasWidth / boxSize;
const heightInBoxes = canvasHeight / boxSize;

let snake = [
    { x: 10, y: 10 }
];
let direction = 'right';
let food = { x: 5, y: 5 };
let score = 0;
let gameOver = true;

function drawRectangle(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x * boxSize, y * boxSize, width * boxSize, height * boxSize);
    context.strokeStyle = 'black';
    context.strokeRect(x * boxSize, y * boxSize, width * boxSize, height * boxSize);
}

function drawSnake() {
    for (const segment of snake) {
        drawRectangle(segment.x, segment.y, 1, 1, 'green');
    }
}

function drawFood() {
    drawRectangle(food.x, food.y, 1, 1, 'red');
}

function generateFood() {
    food.x = Math.floor(Math.random() * widthInBoxes);
    food.y = Math.floor(Math.random() * heightInBoxes);
}

function changeDirection(newDirection) {
    if (
        (direction === 'up' && newDirection !== 'down') ||
        (direction === 'down' && newDirection !== 'up') ||
        (direction === 'left' && newDirection !== 'right') ||
        (direction === 'right' && newDirection !== 'left')
    ) {
        direction = newDirection;
    }
}

function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.y < 0 || head.x >= widthInBoxes || head.y >= heightInBoxes) {
        return true;
    }
    for (const segment of snake.slice(1)) {
        if (head.x === segment.x && head.y === segment.y) {
            return true;
        }
    }
    return false;
}

function update() {
    if (gameOver) {
        if (confirm('Game Over! Press OK to restart.')) {
            score = 0;
            snake = [{ x: 10, y: 10 }];
            direction = 'right';
            generateFood();
            gameOver = false;
        }
        return;
    }
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    moveSnake();
    if (checkCollision()) {
        gameOver = true;
        return;
    }
    drawRect}