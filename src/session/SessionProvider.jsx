import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const sessionContext = createContext();

function SessionProvider({ children }) {
  const [quizName, setQuizName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    quizName,
    userEmail,
    setQuizName,
    setUserEmail,
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
