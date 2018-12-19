const composeFromObject = funcs => (
  Object.values(funcs).reduce((a, b) => (...args) => a(b(...args)), arg => arg)
);

const dicompose = decorators => component => (callback = di => di) => (
  composeFromObject(callback(decorators))(component)
);

export default dicompose;
