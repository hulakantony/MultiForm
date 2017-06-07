import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Home = () => {
  return (
    <div>
      <Link to="/form" className="home__button">Go To Registration</Link>
    </div>
  );
};
export default Home;
