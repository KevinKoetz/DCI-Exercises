import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "./playerTypes";
import { players } from "./playerConfig";
import { RootState } from "../../app/store";

export const initialState: Player = players[Math.floor(Math.random() * 2)];

export const determineNextPlayer = (currentPlayer: Player) => {
  const currentPlayerIndex = players.findIndex(
    (player) => player === currentPlayer
  );
  console.log(players);
  
  if (currentPlayerIndex === -1)
    throw new Error(
      "Current Player not found in players Array, this should never happen."
    );

  return currentPlayerIndex === players.length - 1
    ? players[0]
    : players[currentPlayerIndex + 1];
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    nextPlayer: (state) => determineNextPlayer(state),
    setPlayer: (state, action: PayloadAction<Player>) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { nextPlayer, setPlayer } = playerSlice.actions;

export const selectCurrentPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
