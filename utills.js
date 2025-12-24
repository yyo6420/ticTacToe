export function isCellEmpty(board, x, y) {
  return board[x - 1][y - 1] === "_";
}

export function isWon(board, sign) {
  if (board[0][0] === sign) {
    if (board[1][1] === sign) {
      if (board[2][2] === sign) {
        return true;
      }
    } else if (board[1][0] === sign) {
      if (board[2][0] === sign) {
        return true;
      }
    } else {
      if (board[0][1] === sign) {
        if (board[0][2] === sign) {
          return true;
        }
      }
    }
  }
  if (board[0][1] === sign) {
    if (board[1][1] === sign) {
      if (board[2][1] === sign) {
        return true;
      }
    }
  }
  if (board[0][2] === sign) {
    if (board[1][1] === sign) {
      if (board[2][0] === sign) {
        return true;
      }
    } else {
      if (board[1][2] === sign) {
        if (board[2][2] === sign) {
          return true;
        }
      }
    }
  }
  if (board[1][0] === sign) {
    if (board[1][1] === sign) {
      if (board[1][2] === sign) {
        return true;
      }
    }
  }
  if (board[2][0] === sign) {
    if (board[2][1] === sign) {
      if (board[2][2] === sign) {
        return true;
      }
    }
  }
  return false;
}

export function hasEmptyCell(board) {
  for (let row = 0; row < 2; row++) {
    for (let cell = 0; cell < 2; cell++) {
      if (board[row][cell] === "_") {
        return false;
      }
    }
  }
  return true;
}
