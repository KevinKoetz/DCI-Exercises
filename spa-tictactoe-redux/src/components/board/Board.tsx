import React from 'react';
import { cellNames } from '../../features/board/boardConfig';

import Cell from '../cell/Cell';
import './Board.scss';

function Board() {
  return (
    <div className="Board">
      {cellNames.map(cellName => <Cell key={cellName} cellName={cellName}></Cell>)}
    </div>
  );
}

export default Board;
