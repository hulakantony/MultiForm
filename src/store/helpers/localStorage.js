const loadState = () => {
  try {
    const savedState = localStorage.getItem('formState');
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};
export default loadState;
