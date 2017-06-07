import React from 'react';
import './style.scss';

const ProgressBar = ({ width }) => {
  return (
    <div className="progress__wrap">
      <div className="progress__thumb" style={{ width: `${width}%` }} />
    </div>
  );
};
export default ProgressBar;
