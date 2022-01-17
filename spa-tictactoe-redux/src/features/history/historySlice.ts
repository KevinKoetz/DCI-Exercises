import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HistoryState, HistoryEntry } from "./historyTypes";
import { initialState as initialBoardState } from "../board/boardSlice";
import { initialState as initialPlayerState } from "../player/playerSlice";

const initialHistoryEntry = {
  boardState: initialBoardState,
  player: initialPlayerState,
};

const initialState: HistoryState = {
  entries: [initialHistoryEntry],
  currentIndex: 0,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  //State mutations allowed here because they use Immer internally.
  reducers: {
    clearHistory: () => initialState,
    newHistoryEntry: (
      state,
      action: PayloadAction<HistoryEntry>
    ) => {
      state.currentIndex === state.entries.length - 1
        ? state.entries.push(action.payload)
        : state.entries.splice(state.currentIndex + 1, state.entries.length, action.payload);
        state.currentIndex = state.entries.length - 1
    },
    setUsedEntry: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
      
    },
  },
});

export default historySlice.reducer;

// Action creators are generated for each case reducer function
export const { clearHistory, newHistoryEntry, setUsedEntry } =
  historySlice.actions;

export const selectHistoryEntry = (index: number) => (state: RootState) =>
  state.history.entries[index];

export const selectHistory = (state: RootState) => state.history;
