import React from 'react';
import PropTypes from 'prop-types';
import './Option.scss';

function Option({ isCorrect, onClick }) {
  const handlerKey = (event) => {
    if (isCorrect && event.code === 'KeyY') {
      onClick(isCorrect);
    } else if (!isCorrect && event.code === 'KeyN') {
      onClick(isCorrect);
    }
  };

  const handlerEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClick(isCorrect);
  };

  return (
    <div
      role="button"
      className={isCorrect ? 'correct' : 'notcorrect'}
      onClick={handlerEvent}
      onKeyDown={handlerKey}
      tabIndex="0"
    >
      {isCorrect ? 'True' : 'False'}
    </div>
  );
}

Option.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Option;
