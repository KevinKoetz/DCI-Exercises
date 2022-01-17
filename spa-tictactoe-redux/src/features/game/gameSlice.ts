import { Selector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BoardState } from "../board/boardTypes";
import { Player } from "../player/playerTypes";

const determineWinner = (boardState: BoardState) => {
  const winningCombinations = [
    ["00", "01", "02"] as const,
    ["10", "11", "12"] as const,
    ["20", "21", "22"] as const,
    ["00", "10", "20"] as const,
    ["01", "11", "21"] as const,
    ["02", "12", "22"] as const,
    ["00", "11", "22"] as const,
    ["02", "11", "20"] as const,
  ] as const;

  for (const combination of winningCombinations) {
    if (
      boardState[combination[0]] &&
      boardState[combination[1]] &&
      boardState[combination[2]] &&
      boardState[combination[0]] === boardState[combination[1]] &&
      boardState[combination[1]] === boardState[combination[2]]
    )
      return boardState[combination[0]];
  }
  return null;
};

export const selectWinner: Selector<RootState, Player | null> = (
  state: RootState
) => {
  return determineWinner(state.board);
};
