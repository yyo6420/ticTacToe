import input from "analiza-sync";
import { isCellEmpty } from "./utills.js";

export function selectByplayer(board, player) {
  while (true) {
    let row = input("row:");
    if (isNaN(row)) {
      console.log("Invalid key");
    } else if (row < 1) {
      console.log("Invalid key");
    } else if (row > 3) {
      console.log("Invalid key");
    } else {
      let colomn = input("colomn:");
      if (isNaN(colomn)) {
        console.log("Invalid key");
      } else if (colomn < 1) {
        console.log("Invalid key");
      } else if (colomn > 3) {
        console.log("Invalid key");
      } else {
        if (isCellEmpty(board, row, colomn)) {
          board[row - 1][colomn - 1] = player.sign;
        } else {
          console.log("this place is allredy occupied");
          continue;
        }
        for (let line = 0; line <= 2; line++) {
          console.log(board[line]);
        }
        break;
      }
    }
  }
}
