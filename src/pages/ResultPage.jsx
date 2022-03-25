import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../helpers/routes';
import useSession from '../session/useSession';

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

    const analysis = quiz.questions.map((question, index) => {
      // It was good answer?
      const isGoodAnswer = question.answer === answers[index].response;

      // If it was good, then sum the score up
      if (isGoodAnswer) setScore(score + 1);

      // Return the review
      return {
        question: question.question,
        review: (isGoodAnswer) ? 'good' : 'bad',
      };
    });

    setReviews(analysis);
  };

  useEffect(() => {
    calcReviews();
  }, []);

  return (
    <div>
      <h1>results</h1>
      <ul aria-label="results">
        {reviews.map((review) => (
          <li key={review.question}>
            {review.question}
            {' - '}
            {review.review}
          </li>
        ))}
      </ul>
      <p>
        score:
        {' '}
        {Math.ceil((100 * score) / quiz.questions.length)}
        %
      </p>
    </div>
  );
}

export default ResultPage;
