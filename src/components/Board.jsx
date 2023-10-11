import { Cell } from "./Cell";
import PropTypes from 'prop-types';

function Board({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((cell, index) => {
        return (
          <Cell key={index} index={index} updateBoard={updateBoard}>
            {cell}
          </Cell>
        );
      })}
    </section>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired
};

export default Board;
