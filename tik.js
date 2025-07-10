const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');

let currentPlayer = 'X';
let gameActive = true;
let scoreX = 0;
let scoreO = 0;

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

function handleClick(e) {
  const cell = e.target;
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);

  if (checkWin(currentPlayer)) {
    message.textContent = `${currentPlayer} wins!`;
    gameActive = false;

    if (currentPlayer === 'X') {
      scoreX++;
      scoreXEl.textContent = scoreX;
    } else {
      scoreO++;
      scoreOEl.textContent = scoreO;
    }

  } else if (isDraw()) {
    message.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === player;
    });
  });
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function restartGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = `Player ${currentPlayer}'s turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);

message.textContent = `Player ${currentPlayer}'s turn`;
