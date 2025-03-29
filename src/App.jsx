import Header from "./components/Header";
import Player from "./components/Player";
import GaemBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
  
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex,colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [{ square: {row : rowIndex, col: colIndex} , player:currentPlayer}, ...prevTurns];

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
        <Log turns={gameTurns}></Log>
      </main>
    </>
  );
}

export default App;
