import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardState, CellName, CellState } from "./boardTypes";
import { RootState } from "../../app/store";

export const initialState: BoardState = {
  "00": null,
  "01": null,
  "02": null,
  "10": null,
  "11": null,
  "12": null,
  "20": null,
  "21": null,
  "22": null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  //State mutations allowed here because they use Immer internally.
  reducers: {
    setCell: (
      state,
      action: PayloadAction<{ cellName: CellName; cellState: CellState }>
    ) => {
      state[action.payload.cellName] = action.payload.cellState;
    },
    clearBoardState: () => initialState,
    setBoardState: (state, action: PayloadAction<BoardState>) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setCell, clearBoardState, setBoardState } = boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;

export const selectRow = (row: "0" | "1" | "2") => (state: RootState) => {
  const boardState = state.board;
  const entries = Object.entries(boardState).filter(
    ([key]) => key[0] === row
  ) as [CellName, CellState][];
  return Object.fromEntries(entries);
};

export const selectColumn = (column: "0" | "1" | "2") => (state: RootState) => {
  const boardState = state.board;
  const entries = Object.entries(boardState).filter(
    ([key]) => key[1] === column
  ) as [CellName, CellState][];
  return Object.fromEntries(entries);
};

export const selectDiagonal =
  (from: "00" | "02" | "20" | "22") => (state: RootState) => {
    const boardState = state.board;
    switch (from) {
      case "00":
        return {
          "00": boardState["00"],
          "11": boardState["11"],
          "22": boardState["22"],
        };
      case "02":
        return {
            "02": boardState["02"],
            "11": boardState["11"],
            "20": boardState["20"],
          };
      case "20":
        return {
            "02": boardState["02"],
            "11": boardState["11"],
            "20": boardState["20"],
          };
      case "22":
        return {
            "00": boardState["00"],
            "11": boardState["11"],
            "22": boardState["22"],
          };
    }
  };

export const selectCell = (cell: CellName) => (state: RootState) =>
  state.board[cell];

export default boardSlice.reducer;
