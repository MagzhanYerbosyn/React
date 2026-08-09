import { useMemo } from 'react';
import { calculateStatus, calculateTurns, calculateWinner } from '../../common/helpers';
import type { TSquaresState } from '../../common/types/TSquaresState';
import Square from '../square/Square';

interface IProps {
  xIsNext: boolean;
  squares: TSquaresState;
  onPlay: (squares: TSquaresState) => void;
}

function Board({ xIsNext, squares, onPlay }: IProps) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = useMemo(() => (xIsNext ? 'X' : 'O'), [xIsNext]);

  const status = calculateStatus(winner, turns, player);

  function handleClick(index: number) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = player;

    onPlay(nextSquares);
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
