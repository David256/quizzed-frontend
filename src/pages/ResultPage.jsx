import React from 'react';

function ResultPage() {
  const results = [];
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

export default ResultPage;
