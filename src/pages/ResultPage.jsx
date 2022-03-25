import log from 'loglevel';
import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import routes from '../helpers/routes';
import useSession from '../session/useSession';
import './ResultPage.scss';

function ResultPage() {
  const {
    answers,
    quiz,
  } = useSession();
  const [score, setScore] = useState(0);
  const [reviews, setReviews] = useState([]);

  if (!quiz || !answers) return <Navigate to={routes.quiz} />;

  const calcReviews = () => {
    if (!quiz) return;

    let localScore = 0;

    const analysis = quiz.questions.map((question, index) => {
      // It was good answer?
      log.debug(`${question.answer} === ${answers[index].response}`);
      const isGoodAnswer = question.answer === answers[index].response;

      // If it was good, then sum the score up
      if (isGoodAnswer) localScore += 1;

      // Return the review
      return {
        question: question.question,
        review: (isGoodAnswer) ? 'good' : 'bad',
      };
    });

    setReviews(analysis);
    setScore(localScore);
  };

  useEffect(() => {
    calcReviews();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <ul aria-label="results">
        {reviews.map((review) => (
          <li className="result-item" key={review.question}>
            <div>{review.question}</div>
            <div className="result-review">{review.review}</div>
          </li>
        ))}
      </ul>
      <p className="result-score">
        score:
        {' '}
        {Math.ceil((100 * score) / quiz.questions.length)}
        %
      </p>
      <Link to={routes.home}>
        <button type="button">Again</button>
      </Link>
    </div>
  );
}

export default ResultPage;
