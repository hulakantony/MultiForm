import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import InputField from '../InputField';

const genders = ['Female', 'Male', 'Genderfluid pansexual'];

const renderGendersSelector = ({ input, meta: { touched, error } }) => {
  return (
    <div>
      <select {...input}>
        <option value="">Select gender</option>
        {genders.map((val) => {
          return (<option value={val} key={val}>{val}</option>);
        })}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const SecondFormPage = ({ handleSubmit, pristine, prevPage, submitting }) => {
  return (
    <form className="multi__form" onSubmit={handleSubmit}>
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
      <div>
        <label>Gender</label>
        <Field name="gender" component={renderGendersSelector} />
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={prevPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'multi',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SecondFormPage);
