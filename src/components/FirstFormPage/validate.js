const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password should be minimum 6 characters long';
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password confirmation should match the password';
  }
  // if (!values.sex) {
  //   errors.sex = 'Required';
  // }
  // if (!values.favoriteColor) {
  //   errors.favoriteColor = 'Required';
  // }
  return errors;
};

export default validate;
