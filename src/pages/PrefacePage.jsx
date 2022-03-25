import log from 'loglevel';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../session/useSession';
import routes from '../helpers/routes';

function PrefacePage() {
  const {
    quizName,
    userEmail,
    setQuizName,
    setUserEmail,
    providerOptions,
    selectedProvider,
    setSelectedProvider,
  } = useSession();

  const navigate = useNavigate();

  const onQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const onUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const onSelect = (event) => {
    setSelectedProvider(event.target.value);
  };

  const onSubmit = (event) => {
    if (quizName && userEmail) {
      log.debug(`quizName = ${quizName}`);
      log.debug(`userEmail = ${userEmail}`);
      log.debug(`selectedProvider = ${selectedProvider}`);
      navigate(routes.quiz);
    } else {
      log.warn('missing data in the form');
    }
    event.preventDefault();
  };

  return (
    <div>
      <h2>Preface</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="input-quiz-name">
          Quiz name:
          <input
            id="input-quiz-name"
            type="text"
            aria-label="quiz-name"
            defaultValue={quizName}
            onChange={onQuizNameChange}
          />
        </label>
        <br />
        <label htmlFor="input-email">
          Your email:
          <input
            id="input-email"
            type="email"
            aria-label="user-email"
            defaultValue={userEmail}
            onChange={onUserEmailChange}
          />
        </label>
        <br />
        <p>Provider settings:</p>
        <select
          role="option"
          defaultValue={selectedProvider}
          onChange={onSelect}
          aria-label="provider-option"
          aria-selected
        >
          <option>Select a provider (optional)</option>
          {providerOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))}
        </select>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PrefacePage;
