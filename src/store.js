import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'Data Portal',
  datasets: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD':
      return { ...state, datasets: action.payload.datasets };
    case 'UNLOAD':
      return { ...state, datasets: null };
  }
  return state;
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;
