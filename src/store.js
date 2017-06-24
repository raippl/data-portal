import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const defaultState = {
  appName: 'Data Portal'
};
const reducer = function(state = defaultState, action) {
  return state;
};

const reducers = {
  reducer : reducer,
  form: formReducer     // <---- Mounted at 'form'
}

const red = combineReducers(reducers)

const store = createStore(red);

export default store;
