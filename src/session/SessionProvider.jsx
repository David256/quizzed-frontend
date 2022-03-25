import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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
