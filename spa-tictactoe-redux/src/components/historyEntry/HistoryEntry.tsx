import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setBoardState } from "../../features/board/boardSlice";
import { selectHistory, selectHistoryEntry, setUsedEntry } from "../../features/history/historySlice";
import { setPlayer } from "../../features/player/playerSlice";
import "./HistoryEntry.scss";

function HistoryEntry({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const entry = useAppSelector(selectHistoryEntry(index));
  const history = useAppSelector(selectHistory)
  return (
    <li
      className="HistoryEntry"
      role={"button listitem"}
      onClick={() => {
        dispatch(setBoardState(entry.boardState));
        dispatch(setPlayer(entry.player))
        dispatch(setUsedEntry(history.entries.indexOf(entry)))
      }}
    >
      {(index ? `Go to step ${index + 1},` : "Back to start,") +
        `it was player ${entry.player}'s turn.`}
    </li>
  );
}

export default HistoryEntry;
