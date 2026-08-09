import type { TSquaresState } from '../types/TSquaresState';

export function calculateTurns(squares: TSquaresState) {
  return squares.filter((square) => !square).length;
}
