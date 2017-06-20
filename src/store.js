import { applyMiddleware, createStore } from 'redux';

const defaultState = {
  appName: 'Data Portal'
};
const reducer = function(state = defaultState, action) {
  return state;
};

const store = createStore(reducer);

export default store;
