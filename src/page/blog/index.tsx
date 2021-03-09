import React from 'react';
import './index.less';

function blog() {
  return (
    <div className="blog">
      <h2>Technology Stack</h2>
      <p>frame</p>
      <ul>
        <li>webpack</li>
        <li>webpack module federation</li>
        <li>build develop environment</li>
        <li>build production environment</li>
        <li>eslint</li>
        <li>git pre-commit lint</li>
      </ul>
      <p>develop</p>
      <ul>
        <li>typescript</li>
        <li>react</li>
        <li>react-router</li>
        <li>less</li>
      </ul>
    </div>
  );
}

export default blog;
