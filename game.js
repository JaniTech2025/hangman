export let board = Array(26).fill('');
// export let currentPlayer = selectRandomPlayer();
export let gameOver = false;

// function selectRandomPlayer() {
//   return Math.random() > 0.5 ? 'X' : 'O';
// }


export const checkWinner = (board) => {
  // winning logic here
//   for (let i = 0; i < 9; i += 3) {
//     if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
//       gameOver = true;
//       return board[i];
//     }
//   }
//   //  columns
//   for (let i = 0; i < 3; i++) {
//     if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
//       gameOver = true;
//       return board[i];
//     }
//   }

//   // diagonal right
//   if (board[0] && board[0] === board[4] && board[0] === board[8]) {
//     gameOver = true;
//     return board[0];
//   }

//   //  diagonal left
//   if (board[2] && board[2] === board[4] && board[2] === board[6]) {
//     gameOver = true;
//     return board[2];
//   }

//   if (!board.includes('')) {
//     gameOver = true;
//     return 'draw';
//   }
//   //   game still going
//   return null;
};

export const resetGame = () => {
//   currentPlayer = selectRandomPlayer();
  board = Array(26).fill('');
  gameOver = false;
};