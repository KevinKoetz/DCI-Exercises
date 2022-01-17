import { configureStore } from '@reduxjs/toolkit'
import boardReducer from '../features/board/boardSlice'
import playerReducer from '../features/player/playerSlice'
import historyReducer from '../features/history/historySlice'

const store = configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer,
    history: historyReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch