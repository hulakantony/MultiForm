import { SubmissionError } from 'redux-form';

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const submit = (values) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (values.password !== values.confirmPassword) {
        throw new SubmissionError({ _error: 'Password confirmation should match the password. ' });
      }
    });
};

export default submit;
