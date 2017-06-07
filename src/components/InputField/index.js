import React from 'react';

const renderField = ({ input, type, label, id, meta: { touched, error } }) => {
  const errorNotification = touched && error;
  const placeholder = (label ? label : '');
  return (
    <div className="input__wrapper">
      <input id={id} {...input} className={errorNotification && 'error'} placeholder={placeholder} type={type} />
      { errorNotification && <span className="error__message">{error}</span> }
    </div>
  );
};
export default renderField;
