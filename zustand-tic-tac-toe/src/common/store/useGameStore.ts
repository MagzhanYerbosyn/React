import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { TSquaresState } from '../types/TSquaresState';

interface IInitialState {
  history: TSquaresState[];
  currentMove: number;
  xIsNext: boolean;
}

const initialState: IInitialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  xIsNext: true,
};

export const useGameStore = create(
  combine(initialState, (set) => {
    return {
      setHistory: (nextHistory: TSquaresState[] | ((prev: TSquaresState[]) => TSquaresState[])) => {
        set((state) => ({
          history: typeof nextHistory === 'function' ? nextHistory(state.history) : nextHistory,
        }));
      },
      setCurrentMove: (nextCurrentMove: number | ((prev: number) => number)) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === 'function'
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
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
