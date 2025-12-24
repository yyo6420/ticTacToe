export function createBoard() {
  const board = [];
  for (let i = 0; i < 3; i++) {
    board.push(["_", "_", "_"]);
  }
  return board;
}

