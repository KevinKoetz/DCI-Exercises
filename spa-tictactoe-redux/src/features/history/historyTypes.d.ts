import { BoardState } from "../board/boardTypes"
import { Player } from "../player/playerTypes"

export type HistoryEntry = {
    player: Player,
    boardState: BoardState
}

export type HistoryState = {
    currentIndex: number;
    entries: HistoryEntry[]
}