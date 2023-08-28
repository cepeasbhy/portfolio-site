"use client";

import { use, useState } from "react";
import { isConstructorDeclaration } from "typescript";

export default function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState<number>(1);
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);

  function handlePlaceTurn(blockID: string) {
    if (
      playerTurn != 10 &&
      document.getElementById(blockID)!.innerHTML == "" &&
      !isGameEnd
    ) {
      if (playerTurn % 2 != 0) {
        document.getElementById(blockID)!.innerHTML = "〇";
      } else {
        document.getElementById(blockID)!.innerHTML = "X";
      }
      setPlayerTurn(playerTurn + 1);
      checkGameConditions();
    }
  }

  function checkGameConditions() {
    const player1: boolean = checkPlayerWin("〇");
    const player2: boolean = checkPlayerWin("X");

    if (player1) {
      setIsGameEnd(true);
      setPlayer1Score(player1Score + 1);
      document.getElementById("display-result")!.innerHTML = "PLAYER 〇 WINS!";
    } else if (player2) {
      setIsGameEnd(true);
      setPlayer2Score(player2Score + 1);
      document.getElementById("display-result")!.innerHTML = "PLAYER X WINS!";
    } else if (playerTurn === 9) {
      setIsGameEnd(true);
      document.getElementById("display-result")!.style.display = "block";
      document.getElementById("display-result")!.innerHTML = "IT'S A TIE!";
    }
  }

  function checkPlayerWin(playerBet: string) {
    const b1 = document.getElementById("b1")!.innerHTML;
    const b2 = document.getElementById("b2")!.innerHTML;
    const b3 = document.getElementById("b3")!.innerHTML;
    const b4 = document.getElementById("b4")!.innerHTML;
    const b5 = document.getElementById("b5")!.innerHTML;
    const b6 = document.getElementById("b6")!.innerHTML;
    const b7 = document.getElementById("b7")!.innerHTML;
    const b8 = document.getElementById("b8")!.innerHTML;
    const b9 = document.getElementById("b9")!.innerHTML;

    if (b1 === playerBet && b2 === playerBet && b3 === playerBet) {
      highlightWin("b1", "b2", "b3");
      return true;
    } else if (b4 === playerBet && b5 === playerBet && b6 === playerBet) {
      highlightWin("b4", "b5", "b6");
      return true;
    } else if (b7 === playerBet && b8 === playerBet && b9 === playerBet) {
      highlightWin("b7", "b8", "b9");
      return true;
    } else if (b4 === playerBet) {
      if (b1 === playerBet && b7 === playerBet) {
        highlightWin("b1", "b4", "b7");
        return true;
      }
    } else if (b5 === playerBet) {
      if (b1 === playerBet && b9 === playerBet) {
        highlightWin("b1", "b5", "b9");
        return true;
      } else if (b3 === playerBet && b7 === playerBet) {
        highlightWin("b3", "b5", "b7");
        return true;
      } else if (b2 === playerBet && b8 === playerBet) {
        highlightWin("b2", "b5", "b8");
        return true;
      }
    } else if (b6 === playerBet) {
      if (b3 === playerBet && b9 === playerBet) {
        highlightWin("b3", "b6", "b9");
        return true;
      }
    }

    return false;
  }

  function highlightWin(box1: string, box2: string, box3: string) {
    document.getElementById(box1)!.style.borderColor = "red";
    document.getElementById(box2)!.style.borderColor = "red";
    document.getElementById(box3)!.style.borderColor = "red";
    document.getElementById("display-result")!.style.display = "block";
  }

  function resetItems() {
    document.getElementById("b1")!.innerHTML = "";
    document.getElementById("b2")!.innerHTML = "";
    document.getElementById("b3")!.innerHTML = "";
    document.getElementById("b4")!.innerHTML = "";
    document.getElementById("b5")!.innerHTML = "";
    document.getElementById("b6")!.innerHTML = "";
    document.getElementById("b7")!.innerHTML = "";
    document.getElementById("b8")!.innerHTML = "";
    document.getElementById("b9")!.innerHTML = "";

    document.getElementById("b1")!.style.borderColor = "#279eff";
    document.getElementById("b2")!.style.borderColor = "#279eff";
    document.getElementById("b3")!.style.borderColor = "#279eff";
    document.getElementById("b4")!.style.borderColor = "#279eff";
    document.getElementById("b5")!.style.borderColor = "#279eff";
    document.getElementById("b6")!.style.borderColor = "#279eff";
    document.getElementById("b7")!.style.borderColor = "#279eff";
    document.getElementById("b8")!.style.borderColor = "#279eff";
    document.getElementById("b9")!.style.borderColor = "#279eff";

    document.getElementById("display-result")!.style.display = "none";
    setPlayerTurn(1);
    setIsGameEnd(false);
  }

  function handleResetBtn() {
    resetItems();
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  return (
    <div className="container">
      <div id="game-header">
        <div
          className="game-header-item
        "
        >
          <h1>TIC TAC TOE</h1>
        </div>
        <div
          className="game-header-item
        "
        >
          <p id="display-result"></p>
        </div>
      </div>
      <div id="game-stats">
        <p>PLAYER 1: {player1Score}</p>
        <p>PLAYER 2: {player2Score}</p>
      </div>
      <div id="game-body">
        <div
          className="block"
          id="b1"
          onClick={() => !isGameEnd && handlePlaceTurn("b1")}
        ></div>
        <div
          className="block"
          id="b2"
          onClick={() => !isGameEnd && handlePlaceTurn("b2")}
        ></div>
        <div
          className="block"
          id="b3"
          onClick={() => !isGameEnd && handlePlaceTurn("b3")}
        ></div>
        <div
          className="block"
          id="b4"
          onClick={() => !isGameEnd && handlePlaceTurn("b4")}
        ></div>
        <div
          className="block"
          id="b5"
          onClick={() => !isGameEnd && handlePlaceTurn("b5")}
        ></div>
        <div
          className="block"
          id="b6"
          onClick={() => !isGameEnd && handlePlaceTurn("b6")}
        ></div>
        <div
          className="block"
          id="b7"
          onClick={() => !isGameEnd && handlePlaceTurn("b7")}
        ></div>
        <div
          className="block"
          id="b8"
          onClick={() => !isGameEnd && handlePlaceTurn("b8")}
        ></div>
        <div
          className="block"
          id="b9"
          onClick={() => !isGameEnd && handlePlaceTurn("b9")}
        ></div>
      </div>
      <div id="btn-container">
        <button onClick={() => handleResetBtn()}>RESET GAME</button>
        {isGameEnd && <button onClick={() => resetItems()}>PLAY AGAIN</button>}
      </div>
    </div>
  );
}
