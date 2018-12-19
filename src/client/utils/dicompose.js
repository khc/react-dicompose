const compose = funcs => (
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)
);

const dicompose = (...decorators) => component => (callback = di => di) => (
  compose(callback(decorators))(component)
);

export default dicompose;
