import Header from "./components/Header";
import Player from "./components/Player";
import GaemBoard from "./components/GameBoard";
import { useState } from "react";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updateTurns = [{ square: [rowIndex, colIndex] , player:activePlayer}, ...prevTurns];

      return updateTurns;
    });
  }
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GaemBoard
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
          ></GaemBoard>
        </div>
      </main>
    </>
  );
}

export default App;
