import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import log from 'loglevel';

const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;

export const sessionContext = createContext();

function SessionProvider({ children }) {
  const [quizName, setQuizName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [providerOptions, setProviderOptions] = useState([
    {
      value: 'local',
      text: 'Local provider',
    },
    {
      value: 'quizapi',
      text: 'Quizapi.io provider',
    },
    {
      value: 'opentdb',
      text: 'opentdb.com provider',
    },
  ]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quiz, setQuiz] = useState(null);

  const requestQuiz = () => {
    const params = new URLSearchParams();
    log.debug(`quiz name = ${quizName}`);
    params.append('name', quizName);

    let url = `${endpointUrl}/quizzes`;
    if (selectedProvider) {
      url = `${url}?provider=${selectedProvider}`;
    }
    log.info(url);

    axios.post(url, params, {
      'Content-Type': 'application/x-www-form-urlencoded',
    }).then((response) => {
      log.info(response.data);
      setQuiz(response.data);
    }).catch((error) => {
      if (error.response) {
        log.error(error.response.data);
        log.error(error.response.status);
        log.error(error.response.headers);
      } else if (error.request) {
        log.error(error.request);
      } else {
        log.error('Error', error.message);
      }
      log.error(error.config);
    });
  };

  const sendAnswers = () => {
    if (!answers) {
      log.error('cannot send no answers');
      return;
    }

    const newResult = {
      quizId: quiz.id,
      email: userEmail,
      responses: answers,
    };
    log.info('will send result');
    log.debug(newResult);

    axios.post(`${endpointUrl}/results`, newResult, {
      'Content-Type': 'application/x-www-form-urlencoded',
    }).then((response) => {
      log.info(response.data);
    }).catch((error) => {
      if (error.response) {
        log.error(error.response.data);
        log.error(error.response.status);
        log.error(error.response.headers);
      } else if (error.request) {
        log.error(error.request);
      } else {
        log.error('Error', error.message);
      }
      log.error(error.config);
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    quizName,
    setQuizName,
    userEmail,
    setUserEmail,
    providerOptions,
    setProviderOptions,
    selectedProvider,
    setSelectedProvider,
    answers,
    setAnswers,
    requestQuiz,
    quiz,
    setQuiz,
    sendAnswers,
  };

  return (
    <sessionContext.Provider value={contextValue}>
      {children}
    </sessionContext.Provider>
  );
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionProvider;
