import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectHistory } from '../../features/history/historySlice';
import HistoryEntry from '../historyEntry/HistoryEntry';
import './History.scss';

function History() {
  
  const history = useAppSelector(selectHistory)
  return (
    <ol className="History">
      {history.entries.map((entry, index) => <HistoryEntry index={index} key={index}/>)}
    </ol>
  );
}

export default History;
