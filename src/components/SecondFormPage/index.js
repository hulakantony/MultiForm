import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import InputField from '../InputField';
import SelectField from '../SelectField';
import ErrorPopup from '../ErrorPopup';

const genders = ['Female', 'Male', 'Genderfluid pansexual'];
const hearOptions = ['Internet', 'Fiends', 'Colleagues', 'Others'];

const SecondFormPage = ({ error, handleSubmit, pristine, prevPage, submitting }) => {
  return (
    <form className="multi__form" onSubmit={handleSubmit}>
      <div>
        <label>Date of birth</label>
        <div className="date_input_row">
          <Field
            name="date"
            type="text"
            component={InputField}
            label="DD"
          />
          <Field
            name="month"
            type="text"
            component={InputField}
            label="MM"
          />
          <Field
            name="year"
            type="text"
            component={InputField}
            label="YYYY"
          />
        </div>
      </div>
      <div>
        <label>Gender</label>
        <Field
          name="gender"
          options={genders}
          defaultHolder="Select gender"
          component={SelectField}
        />
      </div>
      <div>
        <label>Where did you hear about us?</label>
        <Field
          name="option"
          options={hearOptions}
          defaultHolder="Select option"
          component={SelectField}
        />
      </div>
      <div className="buttons__wrapper">
        <button type="button" className="previous_button" onClick={prevPage}>
          Previous
        </button>
        <button type="submit" className="next_button" disabled={pristine || submitting}>Submit</button>
        { error && <ErrorPopup delay={2000} message={error} /> }
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'multi',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondFormPage);
