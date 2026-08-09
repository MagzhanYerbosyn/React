import { useMemo } from 'react';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { calculateStatus, calculateTurns, calculateWinner } from '../../common/helpers';
import type { TSquaresState } from '../../common/types/TSquaresState';
import Square from '../square/Square';

const useGameStore = create(
  combine({ squares: Array(9).fill(null) as TSquaresState, xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares: TSquaresState | ((prev: TSquaresState) => TSquaresState)) => {
        set((state) => ({
          squares: typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext: boolean | ((prev: boolean) => boolean)) => {
        set((state) => ({
          xIsNext: typeof nextXIsNext === 'function' ? nextXIsNext(state.xIsNext) : nextXIsNext,
        }));
      },
    };
  })
);

function Board() {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);

  const player = useMemo(() => (xIsNext ? 'X' : 'O'), [xIsNext]);

  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);

  function handleClick(index: number) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = player;

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>{status}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 'calc(3 * 2.5rem)',
          height: 'calc(3 * 2.5rem)',
          border: '1px solid #999',
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
        ))}
      </div>
    </>
  );
}

export default Board;
