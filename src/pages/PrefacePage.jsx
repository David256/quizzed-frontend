import React from 'react';

function PrefacePage() {
  return (
    <div>
      <h1>preface</h1>
      <p>quiz name</p>
      <input type="text" aria-label="quiz-name" />
      <p>your email</p>
      <input type="email" aria-label="user-email" />
      <p>provider settings</p>
      <select role="option" defaultValue={null} aria-label="provider-option" aria-selected>
        <option>Select a provider (optional)</option>
      </select>
      <button type="button">next</button>
    </div>
  );
}

export default PrefacePage;
