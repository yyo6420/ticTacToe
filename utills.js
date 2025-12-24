export function isCellEmpty(board, x, y) {
  return board[x - 1][y - 1] === "_";
}

export function isWon(board, sign) {
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === sign &&
      board[row][1] === sign &&
      board[row][2] === sign
    ) {
      return true;
    }
  }

  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] === sign &&
      board[1][col] === sign &&
      board[2][col] === sign
    ) {
      return true;
    }
  }

  if (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) {
    return true;
  }

  if (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign) {
    return true;
  }

  return false;
}

export function hasEmptyCell(board) {
  for (let row = 0; row < 3; row++) {
    for (let cell = 0; cell < 3; cell++) {
      if (board[row][cell] === "_") {
        return true;
      }
    }
  }
  return false;
}
