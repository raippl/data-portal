import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
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

const reducers = {
  reducer : reducer,
  form: formReducer     // <---- Mounted at 'form'
}

const middleware = applyMiddleware(promiseMiddleware);

const red = combineReducers(reducers)

const store = createStore(red, applyMiddleware(promiseMiddleware));

//const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;
