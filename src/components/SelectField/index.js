import React from 'react';

const SelectField = ({ options, defaultHolder, input, meta: { touched, error } }) => {
  return (
    <div className="input__wrapper">
      <select className={touched && error && 'error'} {...input}>
        <option value="">{defaultHolder}</option>
        {options.map((val) => {
          return (<option value={val} key={val}>{val}</option>);
        })}
      </select>
      {touched && error && <span className="error__message">{error}</span>}
    </div>
  );
};
export default SelectField;
