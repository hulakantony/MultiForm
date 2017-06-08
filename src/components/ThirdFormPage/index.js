import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ThirdFormPage = () => {
  return (
    <div className="multi__form">
      <div className="success_image_wrapper" />
      <Link className="go_to_dashboard_btn" to="/response">Go to Dashboard</Link>
    </div>
  );
};
export default ThirdFormPage;
