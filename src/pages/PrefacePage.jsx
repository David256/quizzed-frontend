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
      <h1>preface</h1>
      <form onSubmit={onSubmit}>
        <p>quiz name</p>
        <input
          type="text"
          aria-label="quiz-name"
          defaultValue={quizName}
          onChange={onQuizNameChange}
        />
        <p>your email</p>
        <input
          type="email"
          aria-label="user-email"
          defaultValue={userEmail}
          onChange={onUserEmailChange}
        />
        <p>provider settings</p>
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
        <button type="submit">next</button>
      </form>
    </div>
  );
}

export default PrefacePage;
