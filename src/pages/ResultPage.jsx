import React from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../helpers/routes';
import useSession from '../session/useSession';

function ResultPage() {
  const {
    answers,
    quiz,
  } = useSession();

  if (!quiz || !answers) return <Navigate to={routes.quiz} />;

  const reviews = () => {
    if (!quiz) return [];
    return quiz.questions.map((question, index) => ({
      question: question.question,
      review: (question.answer === answers[index].response) ? 'good' : 'bad',
    }));
  };

  return (
    <div>
      <h1>results</h1>
      <ul aria-label="results">
        {reviews().map((review) => (
          <li key={review.question}>
            {review.question}
            {' - '}
            {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;
