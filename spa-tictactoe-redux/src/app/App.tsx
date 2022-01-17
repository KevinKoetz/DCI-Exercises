import React from 'react';
import Board from '../components/board/Board';
import History from '../components/history/History';
import { selectWinner } from '../features/game/gameSlice';
import { selectCurrentPlayer } from '../features/player/playerSlice';
import './App.scss';
import { useAppSelector } from './hooks';

function App() {
  const player = useAppSelector(selectCurrentPlayer)
  const winner = useAppSelector(selectWinner)
  return (
    <div className="App">
      {winner ? <p>{winner} has Won the Game!</p> : <p>Player {player}'s turn.</p>}
      <Board/>
      <History />
    </div>
  );
}

export default App;
