import { createStore, combineReducers } from 'redux';

import stepCounter from './modules/stepCounter'; //this is a placeholder reducer for now

const reducers = combineReducers({
  stepCounter,
});

const Store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
