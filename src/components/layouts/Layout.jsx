import React from 'react';
import PropTypes from 'prop-types';

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
          Source
        </a>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
