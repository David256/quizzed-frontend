import React, { useState, useEffect } from 'react';
import log from 'loglevel';
import useSession from '../session/useSession';
import Option from '../components/Option';

function QuizPage() {
  const {
    quizName,
    answers,
    setAnswers,
    quiz,
    requestQuiz,
    sendAnswers,
  } = useSession();

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

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
    requestQuiz();
  }, []);

  // When  we have quiz, start questioning
  useEffect(() => {
    if (quiz) {
      log.info(quiz);
      prepareNextQuestion();
      setIndex(index + 1);
    }
  }, [quiz]);

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
      log.debug('will prepare next quesstion');
      setIndex(index + 1);
      prepareNextQuestion();
    } else {
      log.debug('last question');
      // Send responses (aka answers)
      log.info(answers);
      sendAnswers();
    }
  };

  return (
    <div>
      <h1>
        quiz
        {' '}
        {quizName}
      </h1>
      <div>
        {currentQuestion && (
          <>
            <strong>{currentQuestion.question}</strong>
            <Option isCorrect={false} onClick={onAnswer} />
            <Option isCorrect onClick={onAnswer} />
          </>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
