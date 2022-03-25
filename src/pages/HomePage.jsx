import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the trivia challenge</h1>

      <p>
        You will be presented with 10 true or false question.
      </p>

      <p>
        Can you score 100%?
      </p>

      <Link to={routes.preface}>
        <button className="home-button" type="button">begin</button>
      </Link>
    </div>
  );
}

export default HomePage;
