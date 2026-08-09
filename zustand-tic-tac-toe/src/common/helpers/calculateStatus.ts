import type { TSquareValue } from '../types/TSquareValue';

export function calculateStatus(winner: TSquareValue, turns: number, player: 'X' | 'O') {
  if (!winner && !turns) return 'Draw';
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}
