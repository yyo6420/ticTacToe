import input from "analiza-sync";
import { createBoard } from "./board.js";
import { createPlayer } from "./players.js";
import { selectByplayer } from "./io.js";
import { isWon, hasEmptyCell } from "./utills.js";
function main() {
  const gameBoard = createBoard();
  console.log("Welcome!!!");
  const playerOneName = input("player 1 name:");
  let playerOneSign = "";
  while (playerOneSign !== "x" || playerOneSign !== "o") {
    playerOneSign = input("choose your sign:");
    if (playerOneSign === "x" || playerOneSign === "o") {
      break;
    }
    console.log("please choose x or o only");
  }
  const playerTwoName = input("player 2 name:");
  let playerTwoSign = "";
  while (true) {
    playerTwoSign = input("choose your sign:");
    if (playerTwoSign === "x" || playerTwoSign === "o") {
      if (playerTwoSign === playerOneSign) {
        console.log(`${playerOneName}, alredy choose ${playerOneSign}`);
      } else {
        break;
      }
    } else {
      console.log("please choose x or o only");
    }
  }

  const playerOne = createPlayer(playerOneName, playerOneSign);
  const playerTwo = createPlayer(playerTwoName, playerTwoSign);

  while (
    !isWon(gameBoard, playerOne.sign) &&
    !isWon(gameBoard, playerTwo.sign) &&
    !hasEmptyCell(gameBoard)
  ) {
    console.log(`${playerOne.name}'s turn`);
    selectByplayer(gameBoard, playerOne);

    if (isWon(gameBoard, playerOne.sign)) {
      console.log(`${playerOne.name} won!!!\ncongratulations!!!`);
      break;
    }

    if (hasEmptyCell(gameBoard)) {
      console.log("no spaces left, game over");
      break;
    }

    console.log(`${playerTwo.name}'s turn`);
    selectByplayer(gameBoard, playerTwo);

    if (isWon(gameBoard, playerTwo.sign)) {
      console.log(`${playerTwo.name} won!!!\ncongratulations!!!`);
      break;
    }

    if (hasEmptyCell(gameBoard)) {
      console.log("no spaces left, game over");
      break;
    }
  }

  console.log("Thank you for playing Tic Tac Toe\nhave a nice day ;)");
}

main();
