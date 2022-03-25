import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PrefacePage from '../pages/PrefacePage';
import QuizPage from '../pages/QuizPage';
import ResultPage from '../pages/ResultPage';

import routes from '../helpers/routes';
import './App.css';
import SessionProvider from '../session/SessionProvider';

function App() {
  return (
    <Router>
      <SessionProvider>
        <Routes>
          <Route exact path={routes.home} element={<HomePage />} />
          <Route exact path={routes.preface} element={<PrefacePage />} />
          <Route exact path={routes.quiz} element={<QuizPage />} />
          <Route exact path={routes.result} element={<ResultPage results={[]} />} />
        </Routes>
      </SessionProvider>
    </Router>
  );
}

export default App;
