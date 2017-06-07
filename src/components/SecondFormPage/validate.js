const validate = (values) => {
  const errors = {};
  if (isNaN(values.date)) {
    errors.date = 'Must be a number';
  } else if (!values.date) {
    errors.date = 'Reqired';
  } else if (+values.date > 31 || +values.date < 1) {
    errors.date = 'Not correct date';
  }
  if (isNaN(values.month)) {
    errors.month = 'Must be a number';
  } else if (!values.month) {
    errors.month = 'Reqired';
  } else if (+values.month > 12 || +values.month < 1) {
    errors.month = 'Not correct month';
  }
  if (isNaN(values.year)) {
    errors.year = 'Must be a number';
  } else if (!values.year) {
    errors.year = 'Reqired';
  } else if (+values.year > 2017 || +values.year < 1917) {
    errors.year = 'Not correct year';
  }
  if (!values.gender) {
    errors.gender = 'Required';
  }
  return errors;
};

export default validate;
