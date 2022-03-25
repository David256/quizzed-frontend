import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import useSession from '../session/useSession';
import './HomePage.scss';

function HomePage() {
  const {
    setAnswers,
    setQuiz,
  } = useSession();

  useEffect(() => {
    setAnswers([]);
    setQuiz(null);
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to the trivia challenge</h2>

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
