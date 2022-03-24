import React from 'react';
import PropTypes from 'prop-types';

function ResultPage({ results }) {
  return (
    <div>
      <h1>results</h1>
      <ul aria-label="results">
        {results.map((result) => (
          <li key={result.id}>
            {result.question}
            {' - '}
            {result.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

ResultPage.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.bool.isRequired,
  })).isRequired,
};

export default ResultPage;
