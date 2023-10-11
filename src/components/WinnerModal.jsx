import { Cell } from './Cell';
import PropTypes from 'prop-types';

function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const textTitle = winner ? 'Ganador' : 'Empate';
  return (
    <section className="winner">
      <h2>{textTitle}</h2>
      <article className="modal-text">
        <Cell>{winner}</Cell>
        <button onClick={resetGame}>Volver a jugar</button>
      </article>
    </section>
  );
}

WinnerModal.propTypes = {
  winner: PropTypes.string,
  resetGame: PropTypes.func.isRequired,
};

export default WinnerModal;
