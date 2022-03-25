import ReactDOM from 'react-dom';
import './index.scss';
import log from 'loglevel';
import reportWebVitals from './reportWebVitals';
import Index from './app/Index';

if (process.env.NODE_ENV === 'development') {
  log.setLevel(log.levels.DEBUG);
}

ReactDOM.render(
  Index(),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
