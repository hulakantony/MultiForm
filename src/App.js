import React from 'react';
import PropTypes from 'prop-types';

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
