import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import log from 'loglevel';
import { unescape } from 'html-escaper';
import routes from '../helpers/routes';
import useSession from '../session/useSession';
import Option from '../components/Option';
import './QuizPage.scss';

function QuizPage() {
  const {
    quizName,
    answers,
    setAnswers,
    quiz,
    requestQuiz,
    sendAnswers,
  } = useSession();
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  if (!quizName) return <Navigate to={routes.preface} />;

  /**
   * Get next question and save in `currentQuestion`
   */
  const prepareNextQuestion = () => {
    const question = quiz.questions[index];
    log.debug(question);
    setCurrentQuestion(question);
  };

  // Request the quiz
  useEffect(() => {
    if (!quiz) {
      log.info('request quiz');
      requestQuiz();
    }
  }, []);

  // When  we have quiz, start questioning
  useEffect(() => {
    if (quiz) {
      log.info('will prepare first question');
      log.info(quiz);
      prepareNextQuestion();
      setIndex(index + 1);
    }
  }, [quiz]);

  useEffect(() => {
    if (isFinished) {
      // Save and navigate to next page
      // Send responses (aka answers)
      log.info(answers);
      sendAnswers();
      navigate(routes.result);
    }
  }, [isFinished]);

  const onAnswer = (response) => {
    // Save the answer
    log.info(`response ${response}`);

    const newAnswer = {
      questionId: currentQuestion.questionId,
      response,
    };

    log.debug('save answers');
    log.debug(newAnswer);

    setAnswers([...answers, newAnswer]);

    if (index < quiz.questions.length) {
      log.debug(`will prepare next question, index=${index}`);
      setIndex(index + 1);
      prepareNextQuestion();
    } else {
      log.debug('last question');
      setIsFinished(true);
    }
  };

  return (
    <div>
      <h2 className="rotate">
        Quiz:
        {' '}
        {quizName}
      </h2>
      <p>
        {index}
        {' of '}
        {(quiz) ? quiz.questions.length : 0}
      </p>
      <hr />
      <div>
        {currentQuestion && (
          <>
            <p className="quiz-question">{unescape(currentQuestion.question)}</p>
            <div className="quiz-options">
              <Option isCorrect={false} onClick={onAnswer} />
              <Option isCorrect onClick={onAnswer} />
            </div>
          </>
        )}
        {!currentQuestion && (
          <div className="loading-container">
            <div className="loading rotate">&nbsp;</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
