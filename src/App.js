import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ children }) => {
  return (
    <div className="App">
      { children }
    </div>
  );
};
App.propTypes = {
  children: PropTypes.element.isRequired
};
export default App;
