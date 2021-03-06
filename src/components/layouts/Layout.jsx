import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

function Layout({ children }) {
  return (
    <div id="container">
      <header>
        <h1>Quizzed!</h1>
      </header>

      <section>
        {children}
      </section>

      <footer>
        <a
          href="https://github.com/David256/quizzed-frontend.git"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
        {' - '}
        <a
          href={`${process.env.REACT_APP_ENDPOINT_URL}/api-docs`}
          target="_blank"
          rel="noreferrer"
        >
          Go to API documentation
        </a>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
