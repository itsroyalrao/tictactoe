import { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (state[i] === null) {
      const copyState = [...state];
      copyState[i] = isX ? "X" : "O";
      setState(copyState);
      setIsX(!isX);
    }
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };
  const isWinner = checkWinner();

  function checkDraw() {
    let bool = true;
    for (const element of state) {
      if (element === null) {
        bool = false;
        break;
      }
    }
    return bool;
  }
  const isDraw = checkDraw();

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div className="bg-[rgb(39,39,39)] h-screen space-y-1 flex flex-col justify-center items-center">
        {isWinner ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white text-3xl flex justify-center">
              {isWinner} won the game
            </div>
            <div
              className="w-fit text-xl bg-gray-300 rounded-lg px-2 py-1 cursor-pointer"
              onClick={() => handleReset()}
            >
              Play again
            </div>
          </div>
        ) : isDraw ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white text-3xl flex justify-center">Draw</div>
            <div
              className="w-fit text-xl bg-gray-300 rounded-lg px-2 py-1 cursor-pointer"
              onClick={() => handleReset()}
            >
              Play again
            </div>
          </div>
        ) : (
          <>
            <div className="text-white text-3xl mb-4">
              {isX ? "X's" : "O's"} turn
            </div>
            <div className="w-fit flex space-x-1">
              <Square clicked={() => handleClick(0)} value={state[0]} />
              <Square clicked={() => handleClick(1)} value={state[1]} />
              <Square clicked={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="w-fit flex space-x-1">
              <Square clicked={() => handleClick(3)} value={state[3]} />
              <Square clicked={() => handleClick(4)} value={state[4]} />
              <Square clicked={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="w-fit flex space-x-1">
              <Square clicked={() => handleClick(6)} value={state[6]} />
              <Square clicked={() => handleClick(7)} value={state[7]} />
              <Square clicked={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Board;
