import PropTypes from 'prop-types';

export const Cell = ({ children, updateBoard, index, isSelected }) => {
  const className = `cell_content ${isSelected ? 'isSelected' : ''}`;
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

Cell.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};