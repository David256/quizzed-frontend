import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';

function HomePage() {
  return (
    <div>
      <h1>welcome to the trivia challenge</h1>

      <p>
        you will be presented with 10 true or false question.
      </p>

      <p>
        can you score 100%?
      </p>

      <Link to={routes.preface}>
        <button type="button">begin</button>
      </Link>
    </div>
  );
}

export default HomePage;
