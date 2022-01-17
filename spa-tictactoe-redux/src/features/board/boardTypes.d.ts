import { Player } from "../player/playerTypes"
import { cellNames } from "./boardConfig"

export type CellName = typeof cellNames[number]

export type CellState = null | Player

export type BoardState = Record<CellName, CellState>