import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import InputField from '../InputField';

const FirstFormPage = (props) => {
  const { error, handleSubmit } = props;
  return (
    <form className="multi__form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="text"
          component={InputField}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
          component={InputField}
        />
      </div>
      <div>
        <label htmlFor="confirm">Confirm password</label>
        <Field
          id="confirm"
          name="confirm"
          type="password"
          component={InputField}
        />
      </div>
      { error && <strong>{error}</strong> }
      <div className="buttons__wrapper">
        <button type="submit" disabled={error} className="next_button">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'multi', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FirstFormPage);
