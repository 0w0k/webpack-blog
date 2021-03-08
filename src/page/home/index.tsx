import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function Home() {
  return (
    <div className="home">
      <div className="menu">
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
