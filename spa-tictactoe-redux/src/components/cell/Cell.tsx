import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { selectBoard, selectCell, setCell } from "../../features/board/boardSlice";
import { CellName } from "../../features/board/boardTypes";
import { selectWinner } from "../../features/game/gameSlice";
import { newHistoryEntry } from "../../features/history/historySlice";
import { determineNextPlayer, nextPlayer, selectCurrentPlayer} from "../../features/player/playerSlice";
import "./Cell.scss";

function Cell({ cellName }: { cellName: CellName }) {
  const player = useSelector(selectCurrentPlayer);
  const cellState = useSelector(selectCell(cellName));
  const board = useSelector(selectBoard)
  const dispatch = useAppDispatch();
  const winner = useSelector(selectWinner)
  return (
    <div
      className="Cell"
      onClick={() => {
        if (cellState || winner) return;
        dispatch(setCell({ cellName, cellState: player }));
        dispatch(newHistoryEntry({player: determineNextPlayer(player), boardState: {...board, [cellName]: player}}))
        dispatch(nextPlayer());
      }}
    >
      {cellState}
    </div>
  );
}

export default Cell;
