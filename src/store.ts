import { createStore, combineReducers } from 'redux';

import addCountryData from './modules/addCountryData';
import addGlobalData from './modules/addGlobalData';

const reducers = combineReducers({
  addCountryData,
  addGlobalData,
});

const Store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
