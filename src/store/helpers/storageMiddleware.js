export default function ({ getState }) {
  return next => action => {
    if (action.type === '@@redux-form/BLUR') {
      const formData = JSON.stringify(getState());
      window.localStorage.setItem('formState', formData);
    }
    next(action);
  };
}
